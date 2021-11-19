<template>
  <div id="nav">
    <b-card id="navButton">
      <router-link to="/" tag="button">
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
    </b-card>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style scoped>
#nav {
  text-align: center;
  background-color: #d4d3d3;
}

.icons {
  width: 50px;
  height: 50px;
}

#navButton {
  display: inline-flex;
  border: none;
  text-align: center;
  background-color: #d4d3d3;
}
</style>