<template>
  <!-- <router-link :to='require("/recipe-detail/" + dish.dish)'> -->
  <router-link to="/recipe-detail/kung-pao-chicken">
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
          <!-- <img id="dishImage" :src='require("../assets/" + dish.image)'> -->
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
