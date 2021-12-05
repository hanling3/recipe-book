<template>
  <div class="MealPlan position-relative" id="main-page" >
    <img class="position-absolute" src="@/assets/cooking.svg" alt="SCG-IMG" width="50%" style="z-index: 0; left: 25%;
  bottom: -100px " >
  <!-- <img class="position-absolute" src="@/assets/egg.svg" alt="SCG-IMG" width="300" height="300" style="z-index: 0; transform: rotate(-30deg); left: 80%;
  top: -15%; " >
  <img class="position-absolute" src="@/assets/pot.svg" alt="SCG-IMG" width="300" height="300" style="z-index: 0; left: 80%;
  top: 80%;" > -->
    <h1> Meal Plan </h1><br><br>
    <template v-if="$addtoplan == 'true'">
      <!-- <h3> 12/20/2021 </h3> -->
      <div class="input-group-addon mx-4"> 
        <h2>{{ availableDayString }}</h2>
        <br>
        <h2>{{ availableMealString }}</h2>
      </div>
      <b-row class="mx-3">
        <recipeCard
          v-for="item in mockdataPlan"
          v-bind:key="item.name"
          v-bind:dish="item"
        />
        <!--<datepicker />-->
      </b-row>
      <b-button v-b-modal.weekdays class="mx-5" size="sm" variant="warning" data-toggle="modal" data-target="#weekdays">
          <b-icon class="mx-1" icon="calendar-event"></b-icon>  Choose a day
      </b-button>

      <b-modal id="weekdays" title="Choose day(s) and meal(s):">
        <h3>Weekdays:</h3>
        <div class="checkbox" v-for="day in days" v-bind:key="day.day">
          <label>
            <input class="weekdays" name="weekdays" v-model="day.selected" type="checkbox"> {{ day.day }}
          </label>
        </div>
        <br>
        <h3>Meals:</h3>
        <div class="checkbox" v-for="meal in meals" v-bind:key="meal.meal">
          <label>
            <input class="meals" name="meals" v-model="meal.selected" type="checkbox"> {{ meal.meal }}
          </label>
        </div>
      </b-modal>
      
    </template>
    <template v-else id="hint"> 
       <h5 id="hints"> Browse recipes and add them to your meal plan</h5>
    </template>
  </div>
</template>


<script>
import RecipeCard from '@/components/RecipeCard.vue';
import mockdatabefore from "@/mock-data-before.json";
//import datepicker from "@/components/DatePicker.vue";

  export default {
    name: 'mealplan',
    components: {
      RecipeCard,
      //datepicker
    },
    data: function() {
      return {
        mockdataPlan: [mockdatabefore[0]],
        days: [
          {selected: false, day: 'Monday'},
          {selected: false, day: 'Tuesday'},
          {selected: false, day: 'Wednesday'},
          {selected: false, day: 'Thursday'},
          {selected: false, day: 'Friday'},
          {selected: false, day: 'Saturday'},
          {selected: false, day: 'Sunday'},
        ],
        meals: [
          {selected: false, meal: 'Breakfast'},
          {selected: false, meal: 'Lunch'},
          {selected: false, meal: 'Dinner'}
        ],
      }
    },
    computed: {
    
      selectedDays: function(){
        return this.days.filter(function(day){
          return day.selected;
        }).map(function(day){
          return day.day;
          });
      },
      
      availableDayString: function(){
        return this.selectedDays.join(', ');
      },

      selectedMeals: function(){
        return this.meals.filter(function(meal){
          return meal.selected;
        }).map(function(meal){
          return meal.meal;
          });
      },
      
      availableMealString: function(){
        return this.selectedMeals.join(', ');
      },
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

h3 {
  text-align: left;
}

.content {
  margin: 200px;
}

/* body{
  background-color: #F4F3EF;
} */

.plans{
  padding-left: 20px;
}

.MealPlan{
  height: 100vh;
}
</style>
