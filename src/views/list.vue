<style lang="less">
    @import "../styles/list.less";
</style>
<template>
    <div class="list">
        <div class="head">
            <Row>
                <Col span="21">
                <h1>笔记列表</h1>
                </Col>
            </Row>
            <Row style="padding-top: 6px;">
                <Col span="24">
                <div v-if="profiles">{{profiles.length}} 笔记</div>
                </Col>
            </Row>
        </div>
        <div class="NotesView-ScrollWindow" v-bind:style="{  height: viewHeight + 'px' }">
            <Profile v-for="(profile,index) in profiles"
                     v-bind:profile="profile"
                     v-bind:key="profile.id"
                     v-bind:index="index"></Profile>
        </div>
    </div>
</template>
<script>
    import Profile from './profile.vue';
    import {mapState, mapActions} from 'vuex'


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
        },
        methods: {
            /*1.5 导入heightChange方法  */
            ...mapActions(['getAllProfiles', 'heightChange','noteSwitch'])
        },
        mounted() {
            window.onresize = () => {
                /*1.6 触发heightChange */
                this.heightChange(document.documentElement.clientHeight)
            };
            this.getAllProfiles();
        },
    }
</script>