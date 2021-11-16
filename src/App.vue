<template>
  <div id="app">
    <div id="nav">
      <router-view />
      <b-container class="d-flex">
        <!-- <h1> Recipe Finder App </h1> -->
      <!-- <b-container class="d-flex">
        <h1>Recipe Finder App</h1>
        <router-link to="/plan" tag="button">Plan</router-link>
        <router-link to="/browse" tag="button">Browse</router-link>
        <router-link to="/favorites" tag="button">Favorites</router-link>
        <router-link to="/profile" tag="button">Profile</router-link>
      </b-container>
      </b-container> -->
      <b-row>
        <b-col class="col-4">
          <router-link to="/plan" tag="button">
                <b-icon icon="calendar2-week"></b-icon>
                <p>Plan</p>
          </router-link>
        </b-col>

        <b-col class="col-4">
          <router-link to="/Favorites" tag="button">
                <b-icon icon="heart"></b-icon>
                <p>Saved</p>
          </router-link>
        </b-col>

        <b-col class="col-4">
          <router-link to="/Profile" tag="button">
                <b-icon icon="person"></b-icon>
                <p>Profile</p>
          </router-link>
        </b-col>
      </b-row>

    </div>
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
