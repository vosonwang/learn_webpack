import * as types from '../mutation-types'
// initial state
const state = {
    /*1.1 clientHeight 获取浏览器窗口的初始高度  ->mutation-types.js*/
    clientHeight: document.documentElement.clientHeight,
    fullScreen: false,
    note: {},
};


const mutations = {
    /*1.3 创建改变clientHeight的HEIGHT_CHANGE  */
    [types.HEIGHT_CHANGE](state, new_height) {
        state.clientHeight = new_height
    },
    [types.FULL_SCREEN_SWITCH](state, isActive) {
        state.fullScreen = isActive
    },
    [types.LOAD_NOTE](state, value) {
        state.note = value
    }
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
    loadNote({commit}, value) {
        commit(types.LOAD_NOTE, value)
    }
};

export default {
    state,
    actions,
    mutations
}