<template>
  <router-link :to="`/recipe-detail/${dish.dish}`">
    <div id="recipeCard">
      <b-card
        :title="dish.dish"
        title-tag="h5"
        :img-src="require('../assets/' + dish.image)"
        img-alt="Image"
        img-top
        img-height=150rem
        style="width: 15rem"  
        class="nowrap d-flex justify-content-center" 
      >
        <b-card-text class="d-flex justify-content-between">
          <div> 
            <b-icon icon="clock" scale="1"></b-icon>
            {{ dish.cooktime }}
          </div>
          <div>
          <b-icon icon="cash-stack" scale="1"></b-icon>
          {{ dish.budget }}
          </div>
          {{ dish.difficulty }}
        </b-card-text>
      </b-card>
    </div>
  </router-link>
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

.nowrap {
  white-space: nowrap;
}

#recipeCard {
  display: inline-flex;
  width: 300px;

}

</style>
