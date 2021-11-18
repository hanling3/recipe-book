<template>
  <div>
      <h1>{{name}}</h1>
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    :title="name"
    sub-title="Subtitle"
  >
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>
</div>
</template>

<script>
export default {
  name: "myRecipe",
  props: {
    name: {
      type: String,
    },
  },
};

</script>

<style scoped>
/* a {
  text-decoration: none;
  color: black;
}

.recipeCard {
  display: inline-flex;
  width: 300px;
}

.dishImage {
  width: 200px;
  height: 200px;
} */
</style>
