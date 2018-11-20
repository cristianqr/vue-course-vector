import Vue from 'vue';

Vue.filter('appJoinCourses', (courses, separator) => {
    if(!courses) {
        return '';
    }
    return courses.join(`${separator} `);
});