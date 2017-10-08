<style lang="less">
    @import "../styles/index.less";
</style>
<template>
    <div class="index">
        <Sidebar></Sidebar>
        <Row class="margin_left_73">
            <Col span="6">
            <List></List>
            </Col>
            <Col span="18">
            <Detail></Detail>
            </Col>
        </Row>
    </div>

</template>
<script>
    /*./是本文件夹*/
    import Sidebar from './sidebar.vue';
    import List from './list.vue';
    import Detail from './detail.vue';

    export default {
        components: {
            Sidebar,
            List,
            Detail
        }
    }
</script>
