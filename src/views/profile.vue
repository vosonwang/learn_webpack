<!--简介，缩略-->
<style lang="less">
    @import "../styles/profile.less";
</style>
<template>
    <div class="profile" @click="click">
        <div class="hover">
            {{profile.text}}
        </div>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        props: ['profile'],
        methods:{
            click:function () {
                this.getNote(this.profile.short_id)
            },
            ...mapActions(['loadNote','getNote'])
        }
    }
</script>