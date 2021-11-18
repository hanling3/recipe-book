<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
.d-flex {
  /* display: flex; */
  /* flex-direction: row; */
  /* text-align: center; */
  margin: 0 auto;
  position: absolute;
  left: 35%;
  top: 100%;
  /* -ms-transform: translateY(-50%);
  transform: translateY(-50%);  */
  /* justify-content: center;  */
  text-align: center;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
