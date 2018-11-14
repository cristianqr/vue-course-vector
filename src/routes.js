import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import NotFound from './components/NotFound';
import DefaultLayout from './components/DefaultLayout';
import Login from './components/Login';
import {httpClient} from "./core/http-client";
import {usersGuard} from "./components/users/users.guard";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '',
            component: DefaultLayout,
            beforeEnter: (to, from, next) => {
                if(localStorage.getItem('auth')){
                    next(true);
                }else {
                    next('/login');
                }
            },
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
                    beforeEnter: usersGuard.existUser,
                    component: () => import(/* webpackChunkName: "user-module" */ './components/users/UserEdit')
                },
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '*',
            component: NotFound
        }
    ]
});
