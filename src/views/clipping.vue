<!--简介，缩略-->
<style lang="less">
    @import "../styles/clipping.less";
</style>
<template>
    <div class="clipping" @click="click">
        <div class="hover">
            {{note.text}}
        </div>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        props: ['note'],
        methods:{
            click:function () {
                /*点击一条简介，将简介文字传给全局状态editorValue 这种做法是错误的，点击请求应该是发起一个get请求的！并且只传一个text属性也是不全面的，应该传一个note对象*/
                /*this.editorValueChange(this.note.text)*/
                this.$http.get("/notes/"+this.note.short_id, {}).then(success => {
                    let a = JSON.parse(success.bodyText);
                    if (a.status === 'success') {
                        this.loadNote(a.result)
                    }else if(a.status==='warning'){
                        this.$Message.warning(a.result);
                    }else{
                        this.$Message.error(a.result)
                    }
                }, error => {
                    this.$Message.error(error.bodyText)
                });
            },
            ...mapActions(['loadNote'])
        }
    }
</script>