<template>
  <div id="app">
      <!-- <div class="position-absolute"><img src="public/img/icons/android-chrome-maskable-512x512.png" width="100pt"></div> -->
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
  padding-top:5%;
  padding-left:5%;
  padding-right:5%;
  padding-bottom:5%;
  z-index: 3;
}

#hints {
  font-size: 16px;
  opacity: 70%;
}

/* h1 {
  text-align: left;
  margin-left: 5%;
  font-weight: bold;
  font-size: 40pt;
} */


h3{
  text-align: center;
  font-weight: bold;
}

.button .btn-primary{
  color: orange;
}
</style>
