import Vue from 'vue';

Vue.filter('appMaxLength', (fullName, charComplete, maxLength) => {
    if(!fullName) {
        return fullName;
    }
    if(fullName.length >= maxLength) {
        return fullName.substr(0, maxLength) + charComplete;
    }

    return fullName;
});