import {httpClient} from "../../core/http-client";

export const usersGuard = {
    existUser: (to, from, next) => {
        const userId = to.params.userId;
        httpClient.get('/users/' + userId).then(users => {

            next(true);
        }, () => {
            next('/users');
        });
    }
}