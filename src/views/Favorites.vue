<template>
  <div class="favorites position-relative" id="main-page">
    <pageTitle pageTitle="Favorite" />
<img class="position-absolute" src="@/assets/bag.svg" alt="SCG-IMG" width="350" height="350" style="z-index: 0; transform: rotate(15deg); left: -5%;
  top: 40%; " >
  <img class="position-absolute" src="@/assets/egg.svg" alt="SCG-IMG" width="300" height="300" style="z-index: 0; transform: rotate(-30deg); left: 80%;
  top: -15%; " >
  <img class="position-absolute" src="@/assets/pot.svg" alt="SCG-IMG" width="300" height="300" style="z-index: 0; left: 80%;
  top: 60%;" >
    <div class="mt-5 col-md-10 mx-auto tab ">
      <b-card no-body>
            <b-tabs pills card fill>
        <!---------------  <Display Favorite Recipes> ---------------->
        <b-tab title="My Favorites" active>
          <div>
          <div v-if="$addtofav=='true'">
            <recipeCard
              v-for="item in [mockdatafavorite[1]]"
              v-bind:key="item.name"
              v-bind:dish="item"
            />
          </div>
          <div v-else class="text-center">
            <img src="@/assets/404.svg" alt="SCG-IMG" class="favorites-image">
            <p class="favorites-text">Browse recipes and add them to your favorite list.</p>
          </div>
          </div>
        </b-tab>
        <!---------------  <Display Created Recipes>  ---------------->
        <b-tab title="Add your own recipes" tab-variant="warning ">
          <div class="text-center">
            <!-- <div>
              <p>Upload your recipe by clicking the add button below</p>
            </div> -->
            <div class="row">
              <b-button v-b-modal.modal-xl class="addbutton col-lg-6 col-md-8 col-sm-12 mx-auto">
                <b-icon icon="plus" style="width: 30px; height: 30px"></b-icon>Upload Recipe
              </b-button>
            </div>
          </div>
          <div class="mt-3">
             <recipeCard
            v-for="item in recipes"
            v-bind:key="item.name"
            v-bind:dish="item"
          />
          </div>
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
import pageTitle from "@/components/PageTitle.vue";

export default {
  components: {
    recipeCard,
    UploadRecipe,
    pageTitle
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
  /* width: 50%; */
  border-radius: 8px;
  font-size: 20px;
  margin-right: 48px;
  background-color: #EFAF00;
  border: none;
  font-weight: 700;
}
/* .favorites{
  height: 100vh;
  width: 100%;
} */
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
  width: 100%;
  border:none; 
  border-top: 0; 
  background-color:#ffffff;
  }


.favorites-image {
  /* margin-top: 0%;
  padding: 0%; */
  /* width: 50%; */
  /* height: auto; */
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-bottom: -50px;
}

@media only screen and (max-width: 812px) {

/* .favorites-image {
  /* margin-top: 0%;
  padding: 0%; */
  /* width: 50%; */
  /* height: auto; */
  /* display: block;
  margin-left: 7.5%;
  margin-right: auto; 
  width: 100%;
  margin-bottom: -50px;
  margin-top: 30%;
  text-align: center; */
  
/* }  */

.favorites-image {
  width: 100%;
  /* height: 50%; */
  margin-top: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -50px;
}

.favorites-text {
  text-align: left;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}

}

</style>