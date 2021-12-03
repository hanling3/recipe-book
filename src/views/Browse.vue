<template>
  <div id="main-page">
    <h1>Browse </h1>

    <!----------------- "Favorite" Section --------------->
    <div class="col-10 offset-2 align-items-center">
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
    </template>

    <!----------------- "We Recommend" Section --------------->
    <h2 id="sectionTitle" > We Recommend </h2>
    <div id="buttons">
      <drop-down-menu class="inline-block"/>
      <!-- <br /> -->
      <button type="button" class="btn btn-dark inline-block" v-on:click="visability">
        {{ filter }}
      </button>
    </div>
    <br />
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

export default {
  name: "browse",
  components: {
    recipeCard,
    dropDownMenu,
  },
  data: function () {
    return {
      showAllRecipe: true,
      filter: "Unfiltered",
      title: "Browse",
      mockdatabefore: mockdatabefore,
      mockdataFilter: mockdatabefore,
    };
  },

  methods: {
    visability: function () {
      this.$addtofav='false';
      this.$addtoplan='false';
      this.$thedish=mockdatabefore[0];
      if (this.showAllRecipe == true) {
        this.showAllRecipe = false;
        this.filter = "Filtered";
        this.mockdataFilter = [mockdatabefore[0]];
      } else {
        this.showAllRecipe = true;
        this.filter = "Unfiltered";
        this.mockdataFilter = mockdatabefore;
      }
    },
  },
};
</script>
<style>
</style>

