import Vue from 'vue';

Vue.filter('appJoinCourses', (courses, separator) => {
    return courses.join(`${separator} `);
});