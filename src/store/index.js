import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
/*devtoolPlugin 和 createLogger() 2 个插件，它们是 Vuex 内置插件   链接：http://www.imooc.com/article/14741*/
import createLogger from 'vuex/dist/logger'
import root from './modules/root'
import request from './modules/request'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';


export default new Vuex.Store({
    actions,
    getters,
    modules: {
        root,
        request
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
