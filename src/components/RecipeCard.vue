<template>
  <a :href="dish.link">
    <div class="recipeCard">
      <b-card
        :title="dish.name"
        :img-src="dish.image"
        img-alt="Image"
        img-top
        style="max-width: 15rem"
        class="mb-2"
      >
        <b-card-text>
          <b-icon icon="clock" scale="1"></b-icon>
          {{ dish.cooktime }}
          <b-icon icon="cash-stack" scale="1"></b-icon>
          {{ dish.cost }}
          {{ dish.diffculty }}
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

.dishImage {
  width: 200px;
  height: 200px;
}
</style>
