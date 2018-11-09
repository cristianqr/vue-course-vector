import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import UserList from './components/UserList';
import UserNew from './components/UserNew';
import UserEdit from './components/UserEdit';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/users',
            component: UserList
        },
        {
            path: '/users/new',
            component: UserNew
        },
        {
            path: '/users/edit/:userId',
            component: UserEdit
        }
    ]
});
