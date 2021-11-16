<template>
  <div class="profile">
    <h1>Profile </h1>


    <b-icon icon="person"></b-icon> 
    <h2> Robo  <b-icon icon="pencil"></b-icon> </h2> 

  

    <div class = "badges">
      <h4> My Badges </h4>
      <b-button class="b"> Newly Joined </b-button>
      <b-button class="b"> Consistent Cook </b-button>
      <b-button class="b"> Masterchef </b-button>
    </div> 

    <div class="report">
      <h4> Cooking Report </h4>
    <ul> 
      <li> <p class="left"> Followed 5 recipes this week </p> </li>
      <li> <p class="left"> Spend $100 on food </p> </li> 
      <li> <p class="left"> Saved 15 recipes </p> </li>
    </ul>  
    </div>
  </div>
</template>

<script>
</script>

<style>

h1 {
  text-align: left;
}

h2 {
  font-weight: bold;
}

.badges {
  margin: 50px;
  border-radius: 100%;
  font-weight: bold;
  font-size: 20px;
  width: 50px; 
  margin: 5px; 
  padding: 25px; 
  
}

.report {
  border: 1px solid #d6d6d6;
  padding: 10px;
  margin: 20px;
}

.left {
  text-align: left;
}

b-icon {
  height: 50px;
  width: 50px;
}

</style>
