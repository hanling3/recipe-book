<template>
  <div class="profile">
    <h1>Profile </h1>

    <div class = "header"> 
      <div> <img src="@/assets/profile_propic.jpg" alt="Robo the persona"> </div>
      <div> <h2> Robo  <b-icon icon="pencil"></b-icon> </h2> </div>
    </div>

    <div class = "badge-section">
      <h4> My Badges </h4> 
      <div class = "badges">
        <div> 
          <b-button class="circle"> <b-icon icon="star" class="star"></b-icon> </b-button>
          <h5> Newly Joined </h5>
        </div>

        <div>   
          <b-button class="circle"> <b-icon icon="star" class="star"></b-icon> </b-button>
          <h5> Consistent Cook </h5>
        </div>

        <div>
          <b-button class="circle"> <b-icon icon="star" class="star"></b-icon> </b-button>
          <h5> Masterchef </h5>
        </div> 
      </div>  
    </div>

    <div class="report">
      <h4> Cooking Report </h4>
    <ul> 
      <li> <p class="left"> Completed 5 recipes this week </p> </li>
      <li> <p class="left"> Saved $100 on food by cooking compared to grabbing takeout </p> </li> 
      <li> <p class="left"> Saved 5 hours cooking throughout the week </p> </li>
    </ul>  
    </div>
    <!-- <nav-bar /> -->
  </div>
</template>

<script>
// import navBar from "../components/NavBar.vue";

// export default {
//   name: "profile",
//   components: {
//     navBar
//   },
//   data: () => ({

//   })
// }

</script>

<style>

h1 {
  text-align: left;
  margin-left: 50px;
  margin-top: 50px;
}

/* Header */

img {
  margin-bottom: 30px;
}

.header {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 50px;
}

.p-icon-size {
  position: absolute;
  left: 38%;
  height: 100px;
  width: 100px;
}

h2 {
  font-weight: bold;
}

/* Badges */

h4 {
  margin: 0 auto;
  font-weight: bold;
}

.circle {
  /* position: absolute; */
  /* top: 38%; */
  text-align: center;
  margin: 20px;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  font-weight: bold;
  font-size: 20px;
  /* padding: 20px; */
  /* width: 50px;  
  margin: 5px; 
  padding: 25px; */ 
}

.star {
  height: 50px;
  width: 50px;
}

.badges {
  text-align: center;
  margin: auto;
  width: 30%;  
  display: flex;
  flex-direction: row;
} 

.badge-section {
  text-align: center;
  /* margin: 0 auto; */
}

/* Report */

.report {
  text-align: center;
  border: 1px solid #d6d6d6;
  padding: 20px;
  margin: 50px;
}

.left {
  text-align: left;
}

b-icon {
  height: 50px;
  width: 50px;
}

</style>
