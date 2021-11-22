<template>
  <div class="background ">
    <div class="content text-white text-center">
      <!-- <h1 class="text-white text-center">Find Your Recipe</h1> -->
      <h2 class="title"> Recipe Finder </h2> 
      <h3> by McGraw Studio </h3> 
      <h4> Welcome to our recipe finder! Find delicous recipes, write your own, and track your cooking progress all within our app. 
        To get started, choose one of the options below.
      </h4>

    </div>
      <!-- <b-row align-h="center" class="text-center">
          <b-col cols="3"><router-link to="/browse"><button><b-icon icon="search" style="width: 45px; height: 45px;"></b-icon><br>browse</button></router-link></b-col>
    <b-col cols="3"><router-link to="/favorite"><button><b-icon icon="search" style="width: 45px; height: 45px;"></b-icon><br>favorite</button></router-link></b-col>
    <b-col cols="3"><router-link to="/profile"><button><b-icon icon="search" style="width: 45px; height: 45px;"></b-icon><br>profile</button></router-link> </b-col>
        <b-col cols="3"><router-link to="/plan"><button><b-icon icon="search" style="width: 45px; height: 45px;"></b-icon><br>plan</button></router-link> </b-col>
         </b-row> -->


  </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.background {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.61),
      rgba(0, 0, 0, 0.61)
    ),
    url("../assets/welcome.jpg");
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
}
.title {
  font-size: 48pt;
}

.content h4{
  color: rgb(202, 202, 202);
  margin-top: 32pt;
  line-height: 1.75;
}

#nav {
  padding: 0;

}

</style>
