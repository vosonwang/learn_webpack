<style lang="less">
    @import "../styles/sidebar.less";
</style>
<template>
    <div class="sidebar">
        <Button icon="plus" shape="circle" type="ghost" class="icon" @click=this.getShortId></Button>

    </div>
</template>
<script>
    import Request from '../libs/request'

    export default {
        methods:{
            getShortId:()=>{
                Request.getShortId()
            }
        }
    }
</script>