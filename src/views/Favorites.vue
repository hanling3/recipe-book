<template>
  <div class="favorites" id="main-page">
    <h1>Favorites</h1>
    <div class="mt-5 d-flex justify-content-center">
      <b-card no-body>
            <b-tabs pills card fill>
        <!---------------  <Display Favorite Recipes> ---------------->
        <b-tab title="Favorites" active>
          <div class="tab-content">
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
          </div>
        </b-tab>
        <!---------------  <Display Created Recipes>  ---------------->
        <b-tab title="Created Recipes" tab-variant="warning">
          <div v-if="$uploadrecipe !='true'">
            <p>Upload your recipe by clicking the add button above</p>
          </div>
          <recipeCard
            v-for="item in recipes"
            v-bind:key="item.name"
            v-bind:dish="item"
          />
          <b-button v-b-modal.modal-xl class="addbutton align-middle">
            <b-icon icon="plus" style="width: 40px; height: 40px"></b-icon>Upload Recipe
          </b-button>
          <b-modal @ok="handleOk" title="Upload your recipe" id="modal-xl" size="xl" ok-variant="warning" >
            <Upload-Recipe v-on:newrecipe="addRecipe"></Upload-Recipe>
          </b-modal>
        </b-tab>
      </b-tabs>
      </b-card>
    </div>
    
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
  /* width: 80px;
  height: 80px;
  padding: 6px 0px;  */
  /* /* border-radius: 50px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857; */
  width: 300px;
  border-radius: 8px;
  font-size: 24px;
  margin-right: 48px;
  background-color: #EFAF00;
  border: none;
}
.favorites{
  height: 100vh;
  width: 100%;
}
/* .card-body {
  background-color: #EFAF00;
} */

.button .btn-primary{
  color: orange;
}

.nav-pills .nav-link.active {
  background-color: #EFAF00;
}

.nav-link{
  color: black;
}

.tab-pane{ 
  height: 500px;
  width: 1000px;
  border:none; 
  border-top: 0; 
  background-color:#ffffff;}
</style>