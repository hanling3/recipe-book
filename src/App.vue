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
  /* text-align: center; */
  color:black;
  margin: 0;
  background-color: #F7F3EF;
  overflow: hidden;
  z-index: -1;
}
#main-page {
  padding-top:1%;
  padding-bottom:8%;
  z-index: 3;
}

#hints {
  font-size: 16px;
  opacity: 70%;
  margin-left: 2%;
}

h1 {
  text-align: left;
  margin-left: 2%;
  font-weight: bold;
  font-size: 40pt;
}

#sectionTitle {
  /* text-align: center; */
  margin-top: 24pt;
  /* margin-left: 64pt; */
}

h3{
  text-align: center;
  font-weight: bold;
}

.button .btn-primary{
  color: orange;
}
</style>
