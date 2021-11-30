<template>
  <div id="main-page" class="profile">
    <h1>Profile </h1>

    <div class = "header"> 
      <div> <img src="@/assets/profile_propic.jpg" alt="Robo the persona"> </div>
      <div> <h3> Robo  <b-icon icon="pencil"></b-icon> </h3> </div>
      
      <div class = "badge-header"> <h4>  My Badges </h4> </div>
      <div class = "badges">
        <div> 
          <b-button class="circle"> <b-icon icon="star" class="star"></b-icon> </b-button>
          <h5> Newly Joined </h5>
        </div>

        <div>   
          <b-button v-b-modal.consistentcook-details class="circle"> <b-icon icon="star" class="star"></b-icon> </b-button>
          <h5> Consistent Cook </h5>

          <b-modal id="consistentcook-details" centered title="Consistent Cook">
     
          <p class="badge2-text"> <b-icon icon="award" class="star"></b-icon> Awarded for cooking 20 recipes on the app. Keep it up!</p>
          </b-modal>
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

<style>

/* this part is moved to the App.vue
h1 {
  text-align: left;
  margin-left: 25px;
  margin-top: 25px;
} 
h2 {
  font-weight: bold;
}
*/

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
  margin: auto;
  width:auto; 
  display: flex;
  flex-direction: row;
  text-align: center;
} 

.badge-header {
  margin: auto;
  margin-top: 30px;
  width: auto;
}

/* .badge-section {
  text-align: center;
  margin: 0 auto; 
}  */

/* Report */

.report {
  text-align: center;
  display:inline-block;
  border: 1px solid #d6d6d6;
  padding: 20px;
  margin: 50px;
  width:60%
  /* margin-bottom: 200px; */
}

.left {
  text-align: left;
}

b-icon {
  height: 50px;
  width: 50px;
}

</style>
