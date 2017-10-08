<style lang="less">
    @import "../styles/detail.less";
</style>
<template>
    <div class="detail">
        <editor v-bind:style="{  height: editorHeight + 'px' }"></editor>
        <div class="toolbar" v-bind:class="{ fullScreen: isActive}">
            <Row>
                <Col class="spin-col" span="1">
                    <spin></spin>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    import {mapState, mapGetters} from 'vuex';
    import Editor from './editor.vue'
    import Spin from './spin.vue'

    export default {
        computed: {
            ...mapState({
                    'editorHeight': state => state.common.clientHeight - 40,
                    'isActive': state => state.common.fullScreen
                }
            ),
        },
        components: {
            Editor,
            Spin
        }
    }
</script>