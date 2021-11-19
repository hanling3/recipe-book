<template>
  <div class="favorites">
    <h1>Favorites</h1>
    <!-- <h2> Favorites | Created Recipes </h2>  -->
    <div>
      <b-tabs content-class="mt-3" fill>
        <b-tab title="Favorites" active><p>I'm the first tab</p></b-tab>
        <b-tab title="Created Recipes">
          <!-- <div v-if="recipes != ''">{{ recipes }}</div>
          <div v-if="recipes != ''">{{ this.recipes[0].name }}</div> -->
          <my-recipe v-if="recipes != ''" :name="recipes[0].name" />

          <!-- v-for="(ingredient, k) in form.ingredients"
          :key="k" -->
          <!-- <weather-card v-if="tomorrow" :date="'Tomorrow'" :condition="tomorrow['condition']" :high="tomorrow['high']" :low="tomorrow['low']"/> -->

          <b-button v-b-modal.modal-xl>Add recipe</b-button>
          <b-modal @ok="handleOk" title="BootstrapVue" id="modal-xl" size="xl">
            <Upload-Recipe v-on:newrecipe="addRecipe"></Upload-Recipe>
          </b-modal>
          <p>I'm the second tab
          </p></b-tab>
      </b-tabs>
      <!-- <b-button @click="UploadRecipe()">Add recipe</b-button> -->
    </div>
    <!-- <nav-bar /> -->
  </div>
</template>

<script>
// import recipeCard from '../components/RecipeCard.vue'
import UploadRecipe from "../components/UploadRecipe.vue";
import myRecipe from "../components/MyRecipe.vue";
// import navBar from "../components/NavBar.vue";

export default {
  components: {
    // recipeCard,
    UploadRecipe,
    myRecipe,
    // navBar
  },
  data() {
    return {
      recipes: [],
      tmp_recipe: {},
    };
  },
  methods: {
    // UploadRecipe(){
    //      this.$router.push('/favorites/Uploadrecipe');
    // }
    addRecipe(recipe) {
      console.log(recipe);
      // this.recipes.push(recipe)
      this.tmp_recipe = recipe;
      console.log(this.tmp_recipe);
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Push the name to submitted names
      this.recipes.push(this.tmp_recipe);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-xl");
      });
    },
  },
};
</script>

<style>
</style>