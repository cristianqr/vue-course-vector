<template>
  <div class="container">
    <UserList></UserList>
  </div>
</template>

<script>
import BindEvent from './components/BindEvent.vue';
import ComputedProperty from './components/computed-property';
import LifeCycle from './components/Lifecycle';
import FirstForm from './components/FirstForm';
import UserList from './components/UserList';

export default {
  name: 'app',
  components: {
      BindEvent,
      ComputedProperty,
      UserList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
