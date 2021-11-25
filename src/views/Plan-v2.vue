<template>
  <div class="MealPlan" id="main-page">
    <div class="row">
        <div class="col text-start">
          <h1>Meal Plan</h1>
        </div>
    </div>

    <div id="meals">
      <b-row id="plans">
        <b-col class="text-start">
          <h3>Plans by date</h3>
        </b-col>
      </b-row>

      <RecipeDetail @show-message= "captureSend" />
      

      <b-row v-for="(dates,id) in sortDates"
        v-bind:key="dates.date">
        <b-col class="text-start">
          <h3>{{id == today ? 'Today' : id}}</h3>
          <recipeCard
            v-for="plans in dates"
            v-bind:key="plans.name"
            v-bind:dish="plans"
            />
        </b-col>
      </b-row>
      

    </div>

    <!-- <nav-bar/> -->
  </div>

</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

//import DraggableCal from 'vue-draggable-cal';
// import navBar from "@/components/NavBar.vue";
import RecipeCard from '../components/RecipeCard.vue';
import RecipeDetail from '../views/RecipeDetail.vue';
import mockdata from "@/mock-data.json";
//import datepicker from "@/components/DatePicker.vue";

  export default {
    name: 'mealplan',
    components: {
      RecipeCard,
      RecipeDetail,
      //datepicker
    },
    data() {
      return {
        today: new Date().toDateString(),
        recipes: mockdata,
        showRecipe: true,
        
        listOfPlan: [],
      }
    },
    methods: {
      planAddDates: function() {
          const dates = [new Date(Date.parse("11/30/2021")), 
                        new Date(Date.parse("11/29/2011")), 
                        new Date(Date.parse("12/19/2011"))];
          this.recipes.forEach((d,i) => {
            d.date = dates[i];
          });
          this.listOfPlan = this.recipes;
      },
      captureSend: function(show) {
        this.showRecipe = show;
        console.log(show);
        if (!this.showRecipe) {
          this.recipes.splice(2,1);
        }
        console.log(this.recipes)
      }
    },
    computed: {
        sortDates: function() {
            this.planAddDates();
            console.log(this.listOfPlan);
            const _ = require("lodash");
            var newList = _.groupBy(_.sortBy(this.listOfPlan, 'date').reverse(), 'date');
            console.log(newList);
            return newList;
        }
    },  
}
</script>

<style>

button {
  /* font-style: normal; */
  font-weight: bold;
  font-size: 20px;
  width: 150px;
  text-align: center;
  margin: 5px;
  padding: 25px;
  border: 1px solid #d6d6d6;
  border-radius: 5px; 
    /* border-color: #c4c4c4; */ 
  box-shadow: 1px 1px #cecdcd;
  background-color: white;
}

.content {
  margin: 200px;
}

</style>
