import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [
            {
                "id": 1,
                "firstName": "Cristiabbb",
                "firstSurname": "Quispe5",
                "lastSurname": "Ramireze",
                "email": "cristianqr@outlook.com",
                "gender": "M",
                "country": "ARGENTINA",
                "courses": [
                    "Angular"
                ],
                "username": "cquispe",
                "password": "123"
            },
            {
                "id": 2,
                "firstName": "Laura",
                "firstSurname": "Quispe5",
                "lastSurname": "Ramireze",
                "email": "cristianqr@outlook.com",
                "gender": "F",
                "country": "ARGENTINA",
                "courses": [
                    "Angular"
                ],
                "username": "cquispe",
                "password": "123"
            },
            {
                "id": 3,
                "firstName": "Melyna",
                "firstSurname": "Quispe5",
                "lastSurname": "Ramireze",
                "email": "cristianqr@outlook.com",
                "gender": "F",
                "country": "ARGENTINA",
                "courses": [
                    "Angular"
                ],
                "username": "cquispe",
                "password": "123"
            }
        ]
    },
    getters:{
        totalWoman(state){
            return state.users.filter(item => item.gender === 'F').length;
        },
        totalMen(state){
            return state.users.filter(item => item.gender === 'M').length;
        }
    }
});