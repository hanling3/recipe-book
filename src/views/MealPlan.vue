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
import mockdata from "@/mock-data.json";
import datepicker from "@/components/DatePicker.vue";

  export default {
    name: 'mealplan',
    components: {
      RecipeCard,
      datepicker
    },
    data() {
      return {
        today: new Date().toDateString(),
        mockdata: mockdata,
        listOfPlan: [
            {   
                date: "Nov.1st",
                name:"Tomato and Egg Stir Fry",
                image:"https://christieathome.com/wp-content/uploads/2020/10/Chinese-Tomato-Egg-Stirfry-18-1-scaled.jpg",
                cooktime:"12 min",
                cost:"$5",
                difficulty:"Easy",
                link:"https://docs.google.com/document/d/1-f2XkdXyUBoOxf_4QizudCUTz3t9KBOOOWOhKH8TcUg/edit?usp=sharing"
            },
            {   
                date: "Nov.2nd",
                name:"Tomato and Egg Stir ry",
                image:"https://christieathome.com/wp-content/uploads/2020/10/Chinese-Tomato-Egg-Stirfry-18-1-scaled.jpg",
                cooktime:"12 min",
                cost:"$5",
                difficulty:"Easy",
                link:"https://docs.google.com/document/d/1-f2XkdXyUBoOxf_4QizudCUTz3t9KBOOOWOhKH8TcUg/edit?usp=sharing"
            }
        ],
      }
    },
    methods: {
    },
    computed: {
        sortDates: function() {
            const _ = require("lodash");
            var newList = _.groupBy(_.sortBy(this.mockdata, 'date').reverse(), 'date');
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
