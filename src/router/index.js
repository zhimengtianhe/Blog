import App from '../App'
const Login = r => require.ensure([], () => r(require('../components/Login.vue')), 'Login')
const Faith = r => require.ensure([], () => r(require('../components/Faith.vue')), 'Faith')
const index = r => require.ensure([], () => r(require('../components/index.vue')), 'index')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
       {
            path: '',
            redirect: '/Login'
        },
        {
            path: '/Login',
            component: Login
        },
        {
            path: '/Faith',
            component: Faith
        },
        {
            path: '/index',
            component: index
        }
    ] 
}]