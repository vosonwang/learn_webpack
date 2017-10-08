const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/test',
        meta: {
            title: '测试'
        },
        component: (resolve) => require(['./views/test.vue'], resolve)
    }
];
export default routers;