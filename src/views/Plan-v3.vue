<template>
  <div class="MealPlan" id="main-page">
    <h1> Meal Plan </h1>
    <template v-if="$addtoplan == 'true'">
      <!-- <h3> 12/20/2021 </h3> -->
      <recipeCard
        v-for="item in mockdataPlan"
        v-bind:key="item.name"
        v-bind:dish="item"
      />
    </template>
    <template v-else id="hint"> 
       <h5 id="hints"> Browse recipes and add them to your meal plan</h5>
    </template>
  </div>
</template>


<script>
import RecipeCard from '@/components/RecipeCard.vue';
import mockdatabefore from "@/mock-data-before.json";


  export default {
    name: 'mealplan',
    components: {
      RecipeCard,
    },
    data: function() {
      return {
        mockdataPlan: [mockdatabefore[0]],
      }
    }
    
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
