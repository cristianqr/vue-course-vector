import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import NotFound from './components/NotFound';
import DefaultLayout from './components/DefaultLayout';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '',
            component: DefaultLayout,
            children: [
                {
                    path: '',
                    redirect: '/home'
                },
                {
                    path: '/home',
                    component: Home
                },
                {
                    path: '/users',
                    component: () => import(/* webpackChunkName: "user-module" */ './components/users/UserList')
                },
                {
                    path: '/users/new',
                    component: () => import(/* webpackChunkName: "user-module" */ './components/users/UserNew')
                },
                {
                    path: '/users/edit/:userId',
                    component: () => import(/* webpackChunkName: "user-module" */ './components/users/UserEdit')
                },
            ]
        },
        {
            path: '*',
            component: NotFound
        }
    ]
});
