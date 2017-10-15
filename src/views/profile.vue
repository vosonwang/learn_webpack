<!--简介，缩略-->
<style lang="less">
    @import "../styles/profile.less";
</style>
<template>
    <div class="profile">
        <div class="wrap">
            <Row>
                <Col span="21">
                <div v-html="profile.profile" @click="click" style="max-height: 75px;min-height:75px "></div>
                </Col>
                <Col class="icon" span="3">
                <div @click="delNote">
                    <Icon type="ios-trash-outline"></Icon>
                </div>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        props: ['profile', 'index'],
        computed: {
            ...mapState({
                    'lastProfile': state => state.common.profile,
                    'noteHistory': state => state.request.noteHistory,

                }
            )
        },
        methods: {
            click: function () {
                if (this.noteHistory[this.noteHistory.length - 1].short_id !== this.profile.short_id) {
                    this.noteSwitch(this.profile.short_id);
                    this.getProfile(this.profile)
                }
            },
            delNote: function () {
                this.deleteNote({'short_id': this.profile.short_id, 'index': this.index});
            },
            ...mapActions(['getNote', 'getProfile', 'deleteNote', 'noteSwitch'])
        }
    }
</script>