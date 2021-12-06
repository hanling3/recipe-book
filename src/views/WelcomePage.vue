<template>
  <!-- <div class="background">
    <div class="content text-white text-center">
      <h2 class="title" style="margin-top: 100px"> Recipe Finder </h2> 
      <h4> by McGraw Studio </h4> 
      <h4> Welcome to our recipe finder! Find delicous recipes, write your own, and track your cooking progress all within our app. <br>
        To get started, choose one of the options below.
      </h4>
  </div>
    </div> -->
    
  <b-container class="d-flex justify-content-center background">
  <div class="position-absolute"><img src="../../public/img/icons/android-chrome-maskable-512x512.png" width="100pt"></div>
  <b-row align-v="center" class="d-flex justify-content-center">
    <b-col sm="6" >
      <h2 class="title"> Recipebook </h2> 
      <h5> by McGraw Studio </h5> 
      <h4> Welcome to our recipe finder! Find delicous recipes, write your own, and track your cooking progress all within our app. <br>
        To get started, choose one of the options below.
      </h4>
    </b-col>
    <b-col sm="6" class="align-middle">
      <img class="svg-img" src="@/assets/cook.svg" alt="SCG-IMG"/>
    </b-col>
  </b-row>
</b-container>
<!-- </div> -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.background{
  height: 100vh;
}
body {
  /* background-image: linear-gradient(
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
  position: absolute; */
  background-color: #F7F3EF !important;;
}
.title {
  display: inline;
  font-size: 70pt;
  font-family: 'Pacifico', cursive;
  color: #E57B07;
}
.background h5{
  color: rgb(54, 54, 54);
  margin-top: 16pt;
  font-size: 16pt;
  line-height: 1.75;
}

.background h4{
  color: rgb(54, 54, 54);
  margin-top: 30pt;
  font-size: 16pt;
  line-height: 1.75;
}
/* 
#nav {
  padding: 0;

} */

.btn-group{
  width: 100%;
}

.svg-img{
  /* position: absolute; */
  width: 100%;
  /* height: 100px; */

}


</style>
