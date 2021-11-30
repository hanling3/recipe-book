<template>
  <div class="favorites">
    <h1>Favorites</h1>
    <!-- <h2> Favorites | Created Recipes </h2>  -->
    <div>
      <b-tabs content-class="mt-3" fill>
        <!-- <b-tab title="Favorites" active><p>Please add your favorite recipe here</p></b-tab> -->
        <!---------------  <Display Favorite Recipes> ---------------->
        <b-tab title="Favorites" active>
          <template v-if="$addtofav=='true'">
            <recipeCard
              v-for="item in [mockdatafavorite[1]]"
              v-bind:key="item.name"
              v-bind:dish="item"
            />
          </template>
          <template v-else>
            <p>Browse recipes and add them to your favorite list</p>
          </template>
        </b-tab>
        <!---------------  <Display Created Recipes>  ---------------->
        <b-tab title="Created Recipes">
          <template v-if="$uploadrecipe !='true'">
            <p>Upload your recipe by clicking the add button in the bottom right corner</p>
          </template>
          <recipeCard
            v-for="item in recipes"
            v-bind:key="item.name"
            v-bind:dish="item"
          />
          <b-button v-b-modal.modal-xl class="addbutton">
            <b-icon icon="plus" style="width: 45px; height: 45px"></b-icon>
          </b-button>
          <b-modal @ok="handleOk" title="BootstrapVue" id="modal-xl" size="xl">
            <Upload-Recipe v-on:newrecipe="addRecipe"></Upload-Recipe>
          </b-modal>
        </b-tab>
      </b-tabs>
      <!-- <b-button @click="UploadRecipe()">Add recipe</b-button> -->
    </div>
    <!-- <nav-bar /> -->
  </div>
</template>

<script>
import recipeCard from "../components/RecipeCard.vue";
import UploadRecipe from "../components/UploadRecipe.vue";
// import RecipeDetail from './RecipeDetail.vue';
import mockdatafavorite from "@/mock-data-favorite.json";

export default {
  components: {
    recipeCard,
    UploadRecipe,
  },
  data() {
    return {
      recipes: [],
      tmp_recipe: {},
      mockdatafavorite: mockdatafavorite
    };
  },
  mounted() {
    let local_recipes = JSON.parse(window.localStorage.getItem("recipes"));
    console.log(local_recipes);
    if (local_recipes != null) {
      console.log(local_recipes);
      this.recipes = local_recipes;
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
      const data = JSON.stringify(this.recipes);
      window.localStorage.setItem("recipes", data);

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-xl");
      });
    },
  },
};
</script>

<style>
.addbutton {
  width: 80px;
  height: 80px;
  padding: 6px 0px;
  border-radius: 50px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
  float: right;
  margin-top: 450px;
  margin-right: 48px;
  background-color: #ed6e3a;
  border: none;
}
</style>