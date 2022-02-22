<template>
  <router-view></router-view>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import router from '/@/router'

export default defineComponent({
  name: 'app',
  mounted() {
    router.push("/helloWorld")
  },
  setup(){
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
