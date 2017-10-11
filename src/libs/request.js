import iView from 'iview';
import Vue from 'vue'
import store from '../store'

let request = {};

/*请求异常处理*/
request.responseCheck = ({result, status}, success) => {
    if (status === 'success') {
        success()
    } else if (status === 'warning') {
        iView.Message.warning('注意：'+result);
    } else {
        iView.Message.error('错误：'+result)
    }
};

/*更新笔记内容*/
request.putNote = (data) => {
    Vue.http.put("/notes", data).then(({data: {result, status}}) => {
        request.responseCheck({result, status}, () => {
            /*更新成功后载入loading动画*/
            store.dispatch('loadSwitch')
        })
    }, ({data: result}) => {
        request.responseCheck({'result':result, 'status': 'error'}, () => {})
    });
};


export default request