<template>
  <a :href="dish.link">
    <div class="recipeCard">
      <b-card
        :title="dish.dish"
        :img-src="require('../assets/' + dish.image)"
        img-alt="Image"
        img-top
        style="max-width: 15rem"
        class="mb-2"
      >
        <b-card-text>
          <b-icon icon="clock" scale="1"></b-icon>
          {{ dish.cooktime }}
          <b-icon icon="cash-stack" scale="1"></b-icon>
          {{ dish.budget }}
          {{ dish.difficulty }}
        </b-card-text>
      </b-card>
    </div>
  </a>
</template>

<script>
export default {
  name: "recipeCard",
  props: {
    dish: Object,
  },
  created() {
    console.log("hi");
    if (this.dish.budget == undefined) {
      console.log("here");
      this.dish.budget = 100;
    }
    if (this.dish.image == undefined) {
      console.log("image");
      this.dish.image = "tomato-and-egg-stir-fry.jpg";
    }
  },
  // watch: {
  //   myprop: function (newVal) {
  //     // watch it
  //     console.log("Prop changed: ", newVal);
  //     if (newVal.budget == undefined) {
  //       console.log("here")
  //       this.dish.budget = 100;
  //     }
  //     if (newVal.image == undefined) {
  //       console.log("image")
  //       this.dish.image = "'tomato-and-egg-stir-fry.jpg";
  //     }
  //   },
  // },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.recipeCard {
  display: inline-flex;
  width: 300px;
}

#dishImage {
  width: 200px;
  height: 200px;
}
</style>
