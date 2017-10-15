import * as types from '../mutation-types'
import Vue from 'vue'
import Request from '../../libs/request'

const state = {
    /*简介列表*/
    profiles: [],
    note: {},
    noteHistory: [],
    noteChange: false
};

const getters = {
    /*TODO profiles按修改日期排序*/
};

const mutations = {
    [types.GET_PROFILES](state, profiles) {
        state.profiles = profiles
    },
    [types.GET_NOTE](state, note) {
        state.note = note
    },
    [types.SET_NOTE_HISTORY](state, note) {
        state.noteHistory.push(note)
    },
    [types.UPDATE_NOTE](state, text) {
        state.noteHistory[state.noteHistory.length - 1].text = text
    },
    [types.CHANGE_NOTE](state, bool) {
        state.noteChange = bool
    }

};


const actions = {
    getAllProfiles({commit, state}) {
        /*下面data:{}能够自己解析json格式，不需要手动JSON.parse了*/
        Vue.http.get("/profiles", {}).then(({data: {result, status}}) => {
            Request.responseCheck({result, status}, () => {
                commit(types.GET_PROFILES, result);
                if (state.noteHistory.length === 0 && state.profiles.length > 0) {
                    this.dispatch('noteSwitch', state.profiles[0].short_id)
                }
            })
        }, ({data: result}) => {
            Request.responseCheck({'result': result, 'status': 'error'}, () => {
                console.log(result)
            })
        });
    },
    getNote({commit}, short_id) {
        Vue.http.get("/notes/" + short_id, {}).then(({data: {result, status}}) => {
            Request.responseCheck({result, status}, () => commit(types.GET_NOTE, result))
        }, ({data: result}) => {
            Request.responseCheck({'result': result, 'status': 'error'}, () => {
                console.log(result)
            })
        });
    },
    updateNote({commit}, note) {
        commit(types.GET_NOTE, note)
    },
    changeNote({commit},){
        commit(types.CHANGE_NOTE,false);
    },
    noteSwitch({commit, state}, short_id) {

        /*保存上一条记录*/
        if (state.noteHistory.length > 0) {
            Request.putNote(state.noteHistory[state.noteHistory.length - 1]);
        }
        /*存入新的笔记内容*/
        Vue.http.get("/notes/" + short_id, {}).then(({data: {result, status}}) => {
            Request.responseCheck({result, status}, () => {
                commit(types.CHANGE_NOTE,true);
                commit(types.SET_NOTE_HISTORY, {'short_id': short_id, 'text': result.text})
            })
        }, ({data: result}) => {
            Request.responseCheck({'result': result, 'status': 'error'}, () => {
                console.log(result)
            })
        });
    },
    updateNoteHistory({commit}, text) {
        commit(types.UPDATE_NOTE, text)
    },
    getShortId({commit}) {
        Vue.http.get("/shortId").then(({data: {result, status}}) => {
            Request.responseCheck({result, status}, () => {
                commit(types.GET_NOTE, {'short_id': result, 'text': ''});
                commit(types.GET_PROFILE, {'short_id': result})
            })
        }, ({data: result}) => {
            Request.responseCheck({'result': result, 'status': 'error'}, () => {
                console.log(result)
            })
        });
    },
    deleteNote({commit, state}, {short_id, index}) {
        Vue.http.delete("/notes/" + short_id).then(({data: {result, status}}) => {
            Request.responseCheck({result, status}, () => {
                let a = [], i = 0;
                while (i < state.profiles.length) {
                    if (i !== index) {
                        a.push(state.profiles[i])
                    }
                    i++
                }
                commit(types.GET_PROFILES, a);
                if (state.profiles.length >= 1) {
                    if (state.profiles.length === index) {
                        index--
                    }
                    this.dispatch('getNote', state.profiles[index].short_id);
                } else {
                    commit(types.GET_NOTE, {})
                }
            })
        }, ({data: result}) => {
            Request.responseCheck({'result': result, 'status': 'error'}, () => {
                console.log(result)
            })
        });
    }
};

export default {
    state,
    actions,
    mutations
}