<template>
  <div>
    <pageTitle :pageTitle="title" />
    <section-title :sectionTitle="sectiontitle1" />
    <recipeCard
      v-for="item in listOfDish"
      v-bind:key="item.name"
      v-bind:dish="item"
    />
    <section-title :sectionTitle="sectiontitle2" />
    <drop-down-menu />
      <recipeCard
      v-for="item in listOfDish"
      v-bind:key="item.name"
      v-bind:dish="item"
    />
    <nav-bar />
  </div>
</template>

<script>
import recipeCard from "@/components/RecipeCard.vue";
import pageTitle from "@/components/PageTitle.vue";
import sectionTitle from '@/components/SectionTitle.vue';
import dropDownMenu from '@/components/DropDownMenu.vue';
import navBar from "@/components/NavBar.vue";
export default {
  name: "browse",
  components: {
    recipeCard,
    pageTitle,
    sectionTitle,
    navBar,
    dropDownMenu
  },
  data: () => ({
    title: "Browse",
    sectiontitle1: "Favorite",
    sectiontitle2: "We Recommend",
    listOfDish: [
      {
        name:"Tomato and Egg Stir Fry",
        image:"https://christieathome.com/wp-content/uploads/2020/10/Chinese-Tomato-Egg-Stirfry-18-1-scaled.jpg",
        cooktime:"12 min",
        cost:"$5",
        difficulty:"Easy",
        link:"https://docs.google.com/document/d/1-f2XkdXyUBoOxf_4QizudCUTz3t9KBOOOWOhKH8TcUg/edit?usp=sharing"
      },
        {
        name:"Tomato and Egg Stir Fry",
        image:"https://christieathome.com/wp-content/uploads/2020/10/Chinese-Tomato-Egg-Stirfry-18-1-scaled.jpg",
        cooktime:"12 min",
        cost:"$5",
        difficulty:"Easy",
        link:"https://docs.google.com/document/d/1-f2XkdXyUBoOxf_4QizudCUTz3t9KBOOOWOhKH8TcUg/edit?usp=sharing"
      },
        {
        name:"Tomato and Egg Stir Fry",
        image:"https://christieathome.com/wp-content/uploads/2020/10/Chinese-Tomato-Egg-Stirfry-18-1-scaled.jpg",
        cooktime:"12 min",
        cost:"$5",
        difficulty:"Easy",
        link:"https://docs.google.com/document/d/1-f2XkdXyUBoOxf_4QizudCUTz3t9KBOOOWOhKH8TcUg/edit?usp=sharing"
      }
    ]
  }),
};
</script>
