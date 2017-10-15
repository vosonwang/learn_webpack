import iView from 'iview';
import Vue from 'vue'
import store from '../store'

let request = {};

/*请求异常处理*/
request.responseCheck = ({result, status}, success) => {
    if (status === 'success') {
        success()
    } else if (status === 'warning') {
        iView.Message.warning({
            content: '注意：'+result,
                duration: 5
        });
    } else {
        iView.Message.error({
            content: '错误：'+result,
                duration: 5
        })
    }
};

/*更新笔记内容*/
request.putNote = (data) => {
    Vue.http.put("/notes", data).then(({data: {result, status}}) => {
        request.responseCheck({result, status}, () => {
            /*重载整个简介列表，这个方法比较消耗服务器资源*/
            store.dispatch('getProfiles');
            /*更新成功后载入loading动画*/
            store.dispatch('loadSwitch');
        })
    }, ({data: result}) => {
        request.responseCheck({'result':result, 'status': 'error'},()=>{
            console.log(result)
        })
    });
};


export default request