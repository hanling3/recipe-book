<template>
  <div id="nav">
    <!-- <b-card id="navButton">
      <router-link to="/browse" tag="button">
        <b-icon icon="search" class="icons"></b-icon>
        <p>Browse</p>
      </router-link>
    </b-card>

    <b-card id="navButton">
      <router-link to="/mealplan" tag="button">
        <b-icon icon="calendar2-week" class="icons"></b-icon>
        <p>Plan</p>
      </router-link>
    </b-card>

    <b-card id="navButton">
      <router-link to="/Favorites" tag="button">
        <b-icon icon="heart" class="icons"></b-icon>
        <p>Saved</p>
      </router-link>
    </b-card>

    <b-card id="navButton">
      <router-link to="/Profile" tag="button">
        <b-icon icon="person" class="icons"></b-icon>
        <p>Profile</p>
      </router-link>
    </b-card> -->
    
  <div class="btn-group btn-group-justified">
    <router-link to="/browse" class="btn btn-dark"><b-icon icon="search" style="width: 45px; height: 45px"></b-icon><br />browse</router-link>
    <router-link to="/plan" class="btn btn-dark"><b-icon icon="calendar2-week" style="width: 45px; height: 45px"></b-icon><br />plan</router-link>
    <router-link to="/favorites" class="btn btn-dark"><b-icon icon="heart" style="width: 45px; height: 45px"></b-icon><br />favorite</router-link>
    <router-link to="/plan" class="btn btn-dark"><b-icon icon="person" style="width: 45px; height: 45px"></b-icon><br />profile</router-link>
</div>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style scoped>
#nav {
  width: 100%;
  /* text-align: center; */
  background-color: #2c2c2c17;
  /* position: absolute; */
  /* justify-content: center; */
  position: fixed;
  /* left: 0; */
  bottom: 0;
}

button{
background-color: rgb(216, 216, 216);
color: rgb(0, 0, 0);
width: 100%;
}
/* .icons {
  width: 50px;
  height: 50px;
} */

/* #navButton {
  display: inline-flex;
  border: none;
  text-align: center;
  background-color: #d4d3d328;
} */
</style>