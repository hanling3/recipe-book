<template>
  <div id="nav">
    <b-card id="navButton">
      <router-link to="/plan" tag="button">
        <b-icon icon="calendar2-week"></b-icon>
        <p>Plan</p>
      </router-link>
    </b-card>

    <b-card id="navButton">
      <router-link to="/Favorites" tag="button">
        <b-icon icon="heart"></b-icon>
        <p>Saved</p>
      </router-link>
    </b-card>

    <b-card id="navButton">
      <router-link to="/Profile" tag="button">
        <b-icon icon="person"></b-icon>
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
#navButton {
  display: inline-flex;
  border: none;
}
</style>