import Vue from 'vue';

Vue.directive('appSetFocus', {
    inserted(el, binding){
        console.log(binding.value);
        el.focus();
    }
});