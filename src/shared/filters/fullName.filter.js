import Vue from 'vue';

Vue.filter('appFullName', (user, charSeparator) => {
    if(!user) {
        return user;
    }

    return `${user.lastSurname} ${user.firstSurname} ${user.firstName}`;
});