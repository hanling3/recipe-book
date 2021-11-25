<template>
  <div id="main-page">
    <pageTitle :pageTitle="title" />
    <section-title :sectionTitle="sectiontitle1" />
    <recipeCard
      v-for="item in mockdata"
      v-bind:key="item.reference"
      v-bind:dish="item"
    />
 
    <section-title :sectionTitle="sectiontitle2" />
    <div id="buttons">
      <drop-down-menu />
      <br>
      <button type="button" class="btn btn-dark" v-on:click="visability">
        {{ filter }}
      </button>
    </div>
    <br>
    <recipeCard
      v-for="item in mockdataFavorite"
      v-bind:key="item.name"
      v-bind:dish="item"
    />
  </div>
</template>

<script>
import recipeCard from "@/components/RecipeCard.vue";
import pageTitle from "@/components/PageTitle.vue";
import sectionTitle from "@/components/SectionTitle.vue";
import dropDownMenu from "@/components/DropDownMenu.vue";
import mockdata from "@/mock-data.json";

export default {
  name: "browse",
  components: {
    recipeCard,
    pageTitle,
    sectionTitle,
    // navBar,
    dropDownMenu,
  },
  data: function () {
    return {
      showAllRecipe: true,
      filter: "Unfiltered",
      title: "Browse",
      sectiontitle1: "Favorite",
      sectiontitle2: "We Recommend",
      mockdata: mockdata,
      mockdataFavorite: mockdata,
    };
  },

  methods: {
    visability: function () {
      console.log(" --- this.$addtofav ----")
      console.log(this.$addtofav)
      if (this.showAllRecipe == true) {
        this.showAllRecipe = false;
        this.filter = "Filtered";
        this.mockdataFavorite = [mockdata[2]];
      } else {
        this.showAllRecipe = true;
        this.filter = "Unfiltered";
        this.mockdataFavorite = mockdata;
      }
    },
  },
};
</script>
