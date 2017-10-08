import * as types from '../mutation-types'
import Vue from 'vue'
import Request from '../../libs/request'

const state = {
    profiles: [],
    note:{}
};

const mutations = {
    [types.GET_PROFILES](state, profiles) {
        state.profiles = profiles
    },
    [types.GET_NOTE](state,note){
        state.note = note
    }
};


const actions = {
    getProfiles({commit}) {
        /*下面data:{}能够自己解析json格式，不需要手动JSON.parse了*/
        Vue.http.get("/notes", {}).then(({data: {result, status}}) => {
            Request.responseCheck({result, status},()=>commit(types.GET_PROFILES, result))
        }, ({data:result}) => {
            Request.responseCheck({result,status:'error'},null)
        });
    },
    getNote({commit},id){
        Vue.http.get("/notes/"+id, {}).then(({data: {result, status}}) => {
            Request.responseCheck({result, status},()=>commit(types.GET_NOTE, result))
        }, ({data:result}) => {
            Request.responseCheck({result,status:'error'},null)
        });
    }
};

export default {
    state,
    actions,
    mutations
}