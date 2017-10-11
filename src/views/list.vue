<style lang="less">
    @import "../styles/list.less";
</style>
<template>
    <div class="list">
        <Row class="head">
            <Col span="21">
            <h1>笔记列表</h1>
            <div class="count">
                <span v-if="profiles">{{profiles.length}} 笔记</span>
            </div>
            </Col>
            <Col span="3" class="spin-col">
            <spin></spin>
            </Col>
        </Row>
        <div class="NotesView-ScrollWindow" v-bind:style="{  height: viewHeight + 'px' }">
            <Profile v-for="profile in profiles"
                     v-bind:profile="profile"
                     v-bind:key="profile.id"></Profile>
        </div>
    </div>
</template>
<script>
    import Profile from './profile.vue';
    import {mapState, mapActions} from 'vuex'
    import Spin from './spin.vue'


    export default {
        computed: {
            ...mapState({
                    'viewHeight': state => state.common.clientHeight - 100,
                    'profiles': state => state.request.profiles,
                }
            ),
        },
        components: {
            Profile,
            Spin
        },
        methods: {
            /*1.5 导入heightChange方法  */
            ...mapActions(['getProfiles', 'heightChange'])
        },
        mounted() {
            window.onresize = () => {
                /*1.6 触发heightChange */
                this.heightChange(document.documentElement.clientHeight)
            };
            this.getProfiles();
        },
    }
</script>