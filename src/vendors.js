import iView from 'iview';

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
    }
}