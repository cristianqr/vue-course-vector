import {httpClient} from "../core/http-client";

export const user = {
    namespaced: true,
    state: {
        users: []
    },
    getters: {
        totalWoman(state){
            return state.users.filter(item => item.gender === 'F').length;
        },
        totalMen(state){
            return state.users.filter(item => item.gender === 'M').length;
        }
    },
    mutations: {
        loadUsers(state, userList) {
            state.users = userList;
        },
        addUser(state, newUser) {
            state.users.push(newUser);
        }
    },
    actions: {
        loadUsers(context){
            httpClient.get('/users').then(users => {
                context.commit('loadUsers', users.data);
            });
        },
        saveUser(context, newUser){
            return new Promise((complete, reject) => {
                httpClient.post('/users', newUser).then(user => {
                    context.commit('addUser', user);
                    complete();
                });
            });
        }
    }
}