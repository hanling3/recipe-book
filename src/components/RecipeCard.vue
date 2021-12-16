<template>
   <router-link 
  @click.native="$addtofav='false', $addtoplan='false', $thedish=dish"
  :to="`/recipe-detail/${dish.dish}`"
  >
    <div id="recipeCard" class="mx-auto">
      <!-- <router-link 
        :to="'/recipe-detail/' + dish.reference"
        v-on: click="$emit('update-dish', 'kung-pao-chicken')"
        > -->
       <!-- <router-link to="/recipe-detail/kung-pao-chicken"> -->
      <b-card
        :title="dish.dish"
        title-tag="h5"
        :img-src="require('../assets/' + dish.reference + '.jpg')"
        img-alt="Image"
        img-top
        img-height="150rem"
        style="width: 90%"
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
          <div>
            <b-icon icon="star" scale="1"></b-icon>
            {{ dish.difficulty }}
          </div>
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
    if (this.dish.reference == undefined) {
      console.log("image");
      this.dish.reference = "tomato-and-egg-stir-fry";
    }
  },
  watch: {
    myprop: function (newVal) {
      // watch it
      console.log("Prop changed: ", newVal);
      // if (newVal.budget == undefined) {
      //   console.log("here")
      //   this.dish.budget = "unavaible";
      // }
      if (newVal.image == undefined) {
        console.log("image")
        this.dish.image = "'tomato-and-egg-stir-fry.jpg";
      }
    },
  },
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
  margin-bottom: 28px;

}

.card-text{
color: rgb(122, 122, 122);
font-size: 15px;
}

@media only screen and (max-width: 812px) {

.card-text {
  font-size: 10px;
}

.tab-pane {
  height: 0px;
}
/* 
td {
 text-align: left; 
} */

}

</style>
