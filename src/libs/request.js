import iView from 'iview';
import Vue from 'vue'

export default {
    /*请求异常处理函数*/
    responseCheck({result, status}, success) {
        if (status === 'success') {
            success()
        } else if (status === 'warning') {
            iView.Message.warning(result);
        } else {
            iView.Message.error(result)
        }
    },
    /*更新笔记内容*/
    putNote(data) {
        const _self=this;
        Vue.http.put("/notes", data).then(({data: {result, status}}) => {
            /*TODO optimize 提示保存成功*/
            _self.responseCheck({result, status},()=>{})
        }, ({data: result}) => {
            _self.responseCheck({result, status: 'error'}, ()=>{})
        });
    }
}