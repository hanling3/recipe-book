<template>
  <div class="MealPlan" id="main-page">
    <page-title :pageTitle="title" />
    <template v-if="$addtoplan == 'true'">
      <h3> 12/20/2021 </h3>
      <recipeCard
        v-for="item in mockdataPlan"
        v-bind:key="item.name"
        v-bind:dish="item"
      />
    </template>
    <template v-else id="hint"> 
       <h3> Browse recipes and add them to your meal plan</h3>
    </template>
  </div>
</template>


<script>
import pageTitle from "@/components/PageTitle.vue";
import RecipeCard from '@/components/RecipeCard.vue';
import mockdatabefore from "@/mock-data-before.json";


  export default {
    name: 'mealplan',
    components: {
      pageTitle,
      RecipeCard,
    },
    data: function() {
      return {
        mockdataPlan: [mockdatabefore[0]],
        title: "Meal Plan",
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
