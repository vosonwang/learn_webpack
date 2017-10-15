<style lang="less">
    @import "../styles/detail.less";
</style>
<template>
    <div class="detail">
        <editor v-bind:style="{  height: editorHeight + 'px' }"></editor>
        <div class="toolbar" v-bind:class="{ fullScreen: isActive}">
            <Row>
                <Col span="2" class="spin-col">
                <spin></spin>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
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