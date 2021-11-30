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
  color:black;
  margin: 0;
  background-color: rgb(243, 243, 243);
}
#main-page {
  padding-top:1%;
  padding-bottom:5%
}

#hints {
  font-size: 90%;
  opacity: 70%;
}

h1 {
  text-align: left;
  padding-left: 2%;
  font-weight: bold;
}

#sectionTitle {
  text-align: center;
  padding-top: 1%;
}

h3{
  text-align: center;
  font-weight: bold;
}
</style>
