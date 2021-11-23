<template>
  <div class="favorites">
    <h1>Favorites</h1>
    <!-- <h2> Favorites | Created Recipes </h2>  -->
    <div>
      <b-tabs content-class="mt-3" fill>
        <b-tab title="Favorites" active><p>Please add your favorite recipe here</p></b-tab>
        <b-tab title="Created Recipes">
        <recipeCard
            v-for="item in recipes"
            v-bind:key="item.name"
            v-bind:dish="item"
            />

          <b-button v-b-modal.modal-xl class="addbutton"><b-icon icon="plus" style="width: 45px; height: 45px"></b-icon></b-button>
          <b-modal @ok="handleOk" title="BootstrapVue" id="modal-xl" size="xl">
            <Upload-Recipe v-on:newrecipe="addRecipe"></Upload-Recipe>
          </b-modal>
          <p>Please add your favorite recipe here</p></b-tab>
      </b-tabs>
      <!-- <b-button @click="UploadRecipe()">Add recipe</b-button> -->
    </div>
    <!-- <nav-bar /> -->
  </div>
</template>

<script>
import recipeCard from '../components/RecipeCard.vue'
import UploadRecipe from "../components/UploadRecipe.vue";

export default {
  components: {
    recipeCard,
    UploadRecipe,
  },
  data() {
    return {
      recipes: [],
      tmp_recipe: {},
    };
  },
  mounted() {
    let local_recipes = JSON.parse(window.localStorage.getItem('recipes'));
    console.log(local_recipes);
    if (local_recipes != null) {
      console.log(local_recipes);
      this.recipes = local_recipes
    }
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
      // save to file
      const data = JSON.stringify(this.recipes)
      window.localStorage.setItem('recipes', data);

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-xl");
      });
    },
  },
};
</script>

<style>
.addbutton{
    width: 80px;
    height: 80px;
    padding: 6px 0px;
    border-radius: 50px;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
    float: right;
}

</style>