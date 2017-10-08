<style lang="less">
    @import "../styles/detail.less";
</style>
<template>
    <div class="detail">
        <editor v-bind:style="{  height: editorHeight + 'px' }"></editor>
        <div class="toolbar" v-bind:class="{ fullScreen: isActive}">
            <Spin class="loading" fix>
                <div class="loader">
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5"
                                stroke-miterlimit="10"></circle>
                    </svg>
                </div>
            </Spin>
        </div>
    </div>
</template>
<script>
    import {mapState, mapGetters} from 'vuex';
    import Editor from './editor.vue'

    export default {
        computed: {
            ...mapState({
                    'editorHeight': state => state.common.clientHeight - 40,
                    'isActive': state => state.common.fullScreen
                }
            ),
        },
        components: {
            Editor
        }
    }
</script>