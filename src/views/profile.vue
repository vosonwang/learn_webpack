<!--简介，缩略-->
<style lang="less">
    @import "../styles/profile.less";
</style>
<template>
    <div class="profile" @click="click">
        <div class="hover" v-html="profile.profile">
        </div>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        props: ['profile'],
        computed: {
            ...mapState({
                    'lastProfile': state => state.common.profile,
                }
            )
        },
        methods: {
            click: function () {
                if (this.lastProfile.short_id !== this.profile.short_id) {
                    this.getNote(this.profile.short_id);
                    this.getProfile(this.profile)
                }
            },
            ...mapActions(['loadNote', 'getNote', 'getProfile'])
        }
    }
</script>