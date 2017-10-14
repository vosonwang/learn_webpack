<style lang="less">
    @import "../styles/editor.less";
</style>
<template>
    <div class="editor">

        <!--获取子组件的props，使用子组件的回调函数subfieldtoggle-->
        <mavonEditor style="height: 100%" default_open="edit" placeholder="写点什么或者把文件拖动到这儿..."
                     @subfieldtoggle="subfieldCallback" @fullscreen="fullScreenCallback" @change="changeCallback"
                     :toolbars=this.toolbars :value=this.note.text></mavonEditor>
    </div>
</template>
<script>
    // Local Registration
    import {mavonEditor} from 'mavon-editor'
    import {mapState, mapActions} from 'vuex'
    import 'mavon-editor/dist/css/index.css'
    import Request from '../libs/request'

    export default {
        data() {
            return {
                /*TODO optimize 如何更改按钮排列 暂时没有这样的方案*/
                toolbars: {
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    htmlcode: true, // 展示html源码
                    help: true, // 帮助
                    /* 1.3.5 */

                    /* 1.4.2 */
                    navigation: true, // 导航目录
                    /* 2.1.8 */
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    preview: true, // 预览
                },
                /*上次笔记的段编号*/
                last_short_id: '',
            }
        },
        computed: {
            ...mapState({
                    'note': state => state.request.note,
                }
            )
        },
        components: {
            'mavonEditor': mavonEditor
        },
        methods: {
            /*点击双栏模式的回调函数*/
            subfieldCallback: function () {
                /*在点击双栏模式后，迫使预览模式的值和双栏模式保持一致*/
                this.$children[0].s_preview_switch = this.$children[0].s_subfield
            },
            /*全屏回调*/
            fullScreenCallback: function () {
                this.fullScreenSwitch(this.$children[0].s_fullScreen)
            },
            /*编辑区域内容变更回调*/
            changeCallback: function () {
                /*是否short_id发生了变更，即切换了不同的笔记*/
                if (this.last_short_id === this.note.short_id) {
                    /*将编辑器内的变化同步到store.note,手动双向绑定*/
                    this.updateNote({short_id: this.note.short_id, text: this.$children[0].d_value});

                    let that = this;
                    /*当用户停止输入2s后保存变更后的笔记，利用throttle思路*/
                    clearTimeout(Request.putNote.t);
                    Request.putNote.t = setTimeout(function () {
                        Request.putNote.call(this, that.note)
                    }, 2000)
                } else {
                    this.last_short_id = this.note.short_id
                }

            },
            ...mapActions(['fullScreenSwitch', 'updateNote'])
        },
        mounted() {
            /*默认显示的是全屏编辑，所以双栏模式设置需手动设置为false*/
            this.$children[0].s_subfield = false;
        }
    }
</script>
