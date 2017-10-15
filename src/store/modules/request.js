import * as types from '../mutation-types'
import Vue from 'vue'
import Request from '../../libs/request'

const state = {
    /*简介列表*/
    profiles: [],
    note: {},
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
    }
};


const actions = {
    getProfiles({commit}) {
        /*下面data:{}能够自己解析json格式，不需要手动JSON.parse了*/
        Vue.http.get("/profiles", {}).then(({data: {result, status}}) => {
            Request.responseCheck({result, status}, () => commit(types.GET_PROFILES, result))
        }, ({data: result}) => {
            Request.responseCheck({'result': result, 'status': 'error'},()=>{
                console.log(result)
            })
        });
    },
    getNote({commit}, id) {
        Vue.http.get("/notes/" + id, {}).then(({data: {result, status}}) => {
            Request.responseCheck({result, status}, () => commit(types.GET_NOTE, result))
        }, ({data: result}) => {
            Request.responseCheck({'result': result, 'status': 'error'},()=>{
                console.log(result)
            })
        });
    },
    updateNote({commit}, note) {
        commit(types.GET_NOTE, note)
    },
    getShortId({commit}) {
        Vue.http.get("/shortId").then(({data: {result, status}}) => {
            Request.responseCheck({result, status}, () => commit(types.GET_NOTE, {'short_id': result, 'text': ''}))
        }, ({data: result}) => {
            Request.responseCheck({'result': result, 'status': 'error'},()=>{
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