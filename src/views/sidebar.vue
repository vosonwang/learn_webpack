<style lang="less">
    @import "../styles/sidebar.less";
</style>
<template>
    <div class="sidebar">
        <Button icon="plus" shape="circle" type="ghost" class="icon" @click=this.getShortId></Button>

    </div>
</template>
<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions(['getShortId'])
        }
    }
</script>