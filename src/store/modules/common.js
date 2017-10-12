import * as types from '../mutation-types'
// initial state
const state = {
    /*1.1 clientHeight 获取浏览器窗口的初始高度  ->mutation-types.js*/
    clientHeight: document.documentElement.clientHeight,
    fullScreen: false,
    /*loading控制器*/
    loading: false,
    /*修改中的笔记简介*/
    profile:{}
};


const mutations = {
    /*1.3 创建改变clientHeight的HEIGHT_CHANGE  */
    [types.HEIGHT_CHANGE](state, new_height) {
        state.clientHeight = new_height
    },
    [types.FULL_SCREEN_SWITCH](state, isActive) {
        state.fullScreen = isActive
    },
    [types.LOAD_SWITCH](state, isActive) {
        state.loading = isActive
    },
    [types.GET_PROFILE](state, profile) {
    state.profile = profile
},
};


/*1.4 为HEIGHT_CHANGE发布action   -->  1.5 index.vue*/
/*action 是为了commit mutation，只有mutation才能改变state*/
const actions = {
    heightChange({commit}, new_height) {
        commit(types.HEIGHT_CHANGE, new_height)
    },
    fullScreenSwitch({commit}, isActive) {
        commit(types.FULL_SCREEN_SWITCH, isActive)
    },
    loadSwitch({commit}) {
        commit(types.LOAD_SWITCH, true);
        setTimeout(() => {
            commit(types.LOAD_SWITCH, false);
        }, 3750);
    },
    getProfile({commit}, profile) {
        commit(types.GET_PROFILE, profile)
    },
};

export default {
    state,
    actions,
    mutations
}