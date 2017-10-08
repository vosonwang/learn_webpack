<style lang="less">
    @import "../styles/detail.less";
</style>
<template>
    <div class="detail">
        <editor v-bind:style="{  height: editorHeight + 'px' }"></editor>
        <div class="toolbar" v-bind:class="{ fullScreen: isActive}"></div>
    </div>
</template>
<script>
    import {mapState, mapGetters} from 'vuex';
    import Editor from './editor.vue'

    export default {
        computed: {
            ...mapState({
                    'editorHeight': state => state.root.clientHeight - 40,
                    'isActive':state => state.root.fullScreen
                }
            ),
        },
        components: {
            Editor
        }
    }
</script>