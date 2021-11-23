<template>
  <div id="app">
    <router-view />
    <nav-bar />
  </div>
</template>

<script>
import navBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    navBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background-color: rgb(243, 243, 243);
}
#main-page {
  padding: 20px;
  margin: 50px;
  margin-bottom: 200px;
}
</style>
