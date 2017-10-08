<style lang="less">
    @import "../styles/list.less";
</style>
<template>
    <div class="list">
        <div class="head">
            <h1>笔记列表</h1>
            <div class="count">
                <span v-if="notes">{{notes.length}} 笔记</span>
            </div>
        </div><!--clientHeight-->
        <div class="NotesView-ScrollWindow" v-bind:style="{  height: viewHeight + 'px' }">
            <Clipping v-for="item in notes"
                      v-bind:note="item"
                      v-bind:key="item.id"></Clipping>
        </div>
    </div>
</template>
<script>
    import Clipping from './clipping.vue';
    import {mapState, mapActions} from 'vuex'

    export default {
        computed: {
            ...mapState({
                    'viewHeight': state => state.root.clientHeight - 100,
                    'notes': state => state.request.notes,
                }
            ),
        },
        components: {
            Clipping,
        },
        methods: {
            /*1.5 导入heightChange方法  */
            ...mapActions(['updateNotes', 'heightChange'])
        },
        mounted() {
            window.onresize = () => {
                /*1.6 触发heightChange */
                this.heightChange(document.documentElement.clientHeight)
            };
            this.updateNotes();
        },
    }
</script>