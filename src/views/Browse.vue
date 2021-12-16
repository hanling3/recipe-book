<template>
  <div id="main-page" class="position-relative">
    <pageTitle pageTitle="Browse" />
    <img
      class="position-absolute"
      src="@/assets/egg.svg"
      alt="SCG-IMG"
      width="300"
      height="300"
      style="z-index: 0; transform: rotate(-30deg); left: 80%; top: -5%"
    />
    <img
      class="position-absolute"
      src="@/assets/pot.svg"
      alt="SCG-IMG"
      width="300"
      height="300"
      style="z-index: 0; left: 80%; top: 60%"
    />
    <!----------------- "Favorite" Section --------------->
    <!-- <div class="col-10 offset-2 align-items-center">
    <h2 id="sectionTitle"> Favorite </h2>
    <template v-if="$addtofav == 'true'">
      <recipeCard
        v-for="item in [mockdatabefore[1]]"
        v-bind:key="item.reference"
        v-bind:dish="item"
      />
    </template>
    <template v-else>
      <h5 id="hints"> Browse recipes and add them to your favorite list</h5>
    </template> -->

    <!----------------- "We Recommend" Section --------------->
    <!-- <h2 id="sectionTitle" > We Recommend </h2> -->
      <!-- <div class="filter d-inline-flex p-2"> -->
        <drop-down-menu />
        <div class="ml-auto">
          <button
            type="button"
            class="btn btn-dark d-inline mt-3 mb-3"
            v-on:click="visability"
          >
            {{ filter }}
          </button>
        </div>
      <!-- </div> -->
      <div class="col-md-12 mb-5">
      <recipeCard
        v-for="item in mockdataFilter"
        v-bind:key="item.name"
        v-bind:dish="item"
      />
    </div>
  </div>
</template>

<script>
import recipeCard from "@/components/RecipeCard.vue";
import dropDownMenu from "@/components/DropDownMenu.vue";
import mockdatabefore from "@/mock-data-before.json";
import pageTitle from "@/components/PageTitle.vue";

export default {
  name: "browse",
  components: {
    recipeCard,
    dropDownMenu,
    pageTitle,
  },
  data: function () {
    return {
      showAllRecipe: true,
      filter: "Save Filter",
      mockdatabefore: mockdatabefore,
      mockdataFilter: mockdatabefore,
    };
  },

  methods: {
    visability: function () {
      this.$addtofav = "false";
      this.$addtoplan = "false";
      this.$thedish = mockdatabefore[0];
      if (this.showAllRecipe == true) {
        this.showAllRecipe = false;
        this.filter = "Clear";
        this.mockdataFilter = [mockdatabefore[0]];
      } else {
        this.showAllRecipe = true;
        this.filter = "Save Filter";
        this.mockdataFilter = mockdatabefore;
      }
    },
  },
};
</script>
<style>
/* #main-page{
  background-image: 
    url("../assets/bg1.png");
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
} */
</style>

