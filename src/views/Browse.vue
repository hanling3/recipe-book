<template>
  <div id="main-page">
    <pageTitle :pageTitle="title" />

    <!----------------- "Favorite" Section --------------->
    <section-title sectionTitle="Favorite" />
    <template v-if="$addtofav == 'true'">
      <recipeCard
        v-for="item in [mockdatabefore[1]]"
        v-bind:key="item.reference"
        v-bind:dish="item"
      />
    </template>
    <template v-else>
      <h3 id="hints"> Browse recipes and add them to your favorite list</h3>
    </template>

    <!----------------- "We Recommend" Section --------------->
    <section-title sectionTitle="We Recommend" />
    <div id="buttons">
      <drop-down-menu />
      <br />
      <button type="button" class="btn btn-dark" v-on:click="visability">
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
</template>

<script>
import recipeCard from "@/components/RecipeCard.vue";
import pageTitle from "@/components/PageTitle.vue";
import sectionTitle from "@/components/SectionTitle.vue";
import dropDownMenu from "@/components/DropDownMenu.vue";
import mockdatabefore from "@/mock-data-before.json";

export default {
  name: "browse",
  components: {
    recipeCard,
    pageTitle,
    sectionTitle,
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
