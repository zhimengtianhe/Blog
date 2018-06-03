import App from '../App'
const Login = r => require.ensure([], () => r(require('../components/Login.vue')), 'Login')
const Faith = r => require.ensure([], () => r(require('../components/Faith.vue')), 'Faith')
const Index = r => require.ensure([], () => r(require('../components/Index.vue')), 'Index')
const TimeAxis = r => require.ensure([], () => r(require('../components/TimeAxis.vue')), 'TimeAxis')
const Personal = r => require.ensure([], () => r(require('../components/Personal.vue')), 'Personal')
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
            path: '/Index',
            component: Index
        },
        {
            path:'/TimeAxis',
            component:TimeAxis
        },
        {
            path:'/Personal',
            component:Personal
        }
        
    ] 
}]