<template>
  <!-- <div class="d-flex justify-content-around align-content-end" id="navBar">
    <b-card id="navButton">
      <router-link to="/browse" class="button">
        <b-icon icon="search" class="icons"></b-icon>
        <p>Browse</p>
      </router-link>
    </b-card>

    <b-card id="navButton">
      <router-link to="/mealplan" class="button">
        <b-icon icon="calendar2-week" class="icons"></b-icon>
        <p>Plan</p>
      </router-link>
    </b-card>

    <b-card id="navButton">
      <router-link to="/Favorites" class="button">
        <b-icon icon="heart" class="icons"></b-icon>
        <p>Saved</p>
      </router-link>
    </b-card>

    <b-card id="navButton">
      <router-link to="/Profile" class="button">
        <b-icon icon="person" class="icons"></b-icon>
        <p>Profile</p>
      </router-link>
    </b-card> -->

  <div id="navBar">
    <b-row align-h="center" class="text-center">
      <b-col cols="3">
        <router-link to="/browse">
          <button>
            <b-icon icon="search" class="icons"></b-icon><br />
            browse
          </button>
        </router-link>
      </b-col>

      <b-col cols="3">
        <router-link to="/favorites">
          <button>
            <b-icon icon="heart" class="icons"></b-icon><br />
            favorites
          </button>
        </router-link>
      </b-col>

      <b-col cols="3">
        <router-link to="/plan">
          <button>
            <b-icon icon="calendar2-week" class="icons"></b-icon><br />
            plan
          </button>
        </router-link>
      </b-col>

      <b-col cols="3">
        <router-link to="/profile">
          <button>
            <b-icon icon="person" class="icons"></b-icon><br />
            profile
          </button>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style scoped>
#navBar {
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  /* align-content: end; */
  bottom: 0;
  
} 

/* button{
  color: rgb(184, 184, 184);
} */

button{
background-color: rgb(216, 216, 216);
color: rgb(0, 0, 0);
width: 100%;
}
/* .icons {
  width: 50px;
  height: 50px;
} */

.icons {
  width: 45px;
  height: 45px;
}
</style>