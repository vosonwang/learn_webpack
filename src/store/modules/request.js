import * as types from '../mutation-types'
import Vue from 'vue'
import Vendors from '../../vendors'

const state = {
    notes: [],
};

const mutations = {
    [types.UPDATE_NOTES](state, notes) {
        state.notes = notes
    }
};


const actions = {
    updateNotes({commit}) {
        /*下面data:{}能够自己解析json格式，不需要手动JSON.parse了*/
        Vue.http.get("/notes", {}).then(({data: {result, status}}) => {
            Vendors.responseCheck({result, status},()=>commit(types.UPDATE_NOTES, result))
        }, ({data:result}) => {
            Vendors.responseCheck({result,status:'error'},null)
        });
    }
};

export default {
    state,
    actions,
    mutations
}