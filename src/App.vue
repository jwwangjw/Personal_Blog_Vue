<template>
  <div :style="{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import { reactive } from 'vue';
import NavBar from './components/NavBar.vue';


export default {
  name: "App",
  components: { NavBar },
  setup() {
    const pageHeight = reactive({
      height: window.innerHeight
    })
    console.log(pageHeight)
    return { pageHeight }
  }
};
</script>

<style>
#app {
  padding: 0;
}

* {
  margin: 0;
  padding: 0;
  border: 0
}
</style>
