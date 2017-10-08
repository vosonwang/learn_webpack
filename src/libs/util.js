let util = {

};
util.title = function (title) {
    /*标题生成*/
    title = title ? title + ' - Snote' : 'Snote —— 一个在线的剪贴板';
    window.document.title = title;
};

export default util;