<template>
  <div class="background">
    <div class="content text-white text-center">
      <!-- <h1 class="text-white text-center">Find Your Recipe</h1> -->
      <h2 class="title"> Recipe Finder </h2> 
      <h4> by McGraw Studio </h4> 
      <h4> Welcome to our recipe finder! Find delicous recipes, write your own, and track your cooking progress all within our app. 
        To get started, choose one of the options below.
      </h4>
  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
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
  font-family: 'Pacifico', cursive;
}

.content h4{
  color: rgb(202, 202, 202);
  margin-top: 32pt;
  line-height: 1.75;
}
/* 
#nav {
  padding: 0;

} */

.btn-group{
  width: 100%;
}

</style>
