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
    <b-row align-h="center" class="text-center">
      <b-col cols="3"
        ><router-link to="/browse"
          ><button>
            <b-icon icon="search" style="width: 45px; height: 45px"></b-icon
            ><br />browse
          </button></router-link
        ></b-col
      >
      <b-col cols="3"
        ><router-link to="/favorites"
          ><button>
            <b-icon icon="calendar2-week" style="width: 45px; height: 45px"></b-icon
            ><br />favorite
          </button></router-link
        ></b-col
      >
      <b-col cols="3"
        ><router-link to="/profile"
          ><button>
            <b-icon icon="heart" style="width: 45px; height: 45px"></b-icon
            ><br />profile
          </button></router-link
        >
      </b-col>
      <b-col cols="3"
        ><router-link to="/plan"
          ><button>
            <b-icon icon="person" style="width: 45px; height: 45px"></b-icon
            ><br />plan
          </button></router-link
        >
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
#nav {
  width: 100%;
  /* text-align: center; */
  background-color: #ffffff;
  /* position: absolute; */
  /* justify-content: center; */
  position: fixed;
  /* left: 0; */
  bottom: 0;
}

button{
color: rgb(184, 184, 184);
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