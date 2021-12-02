<template>
  <div class="d-flex justify-content-around align-content-end" id="navBar">
  <div class="btn-group btn-group-justified">
    <router-link to="/browse" class="btn btn-light"><b-icon icon="search" style="width: 45px; height: 45px"></b-icon><br />browse</router-link>
    <router-link to="/mealplan" class="btn btn-light"><b-icon icon="calendar2-week" style="width: 45px; height: 45px"></b-icon><br />plan</router-link>
    <router-link to="/favorites" class="btn btn-light"><b-icon icon="heart" style="width: 45px; height: 45px"></b-icon><br />favorite</router-link>
    <router-link to="/profile" class="btn btn-light"><b-icon icon="person" style="width: 45px; height: 45px"></b-icon><br />profile</router-link>
</div>
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
  background-color: #2c2c2c17;
  position: fixed;
  bottom: 0px;
} 

.btn-group{
  width: 100%;
}

button{
background-color: rgb(216, 216, 216);
width: 100%;
}

button:active{
  background-color: aquamarine;
}
.icons {
  width: 45px;
  height: 45px;
}
</style>