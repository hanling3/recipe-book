<template>
  <div class="recipe card">
    <b-row>
      <b-col>
          <img src="../assets/logo.png" class="rounded mx-auto d-block" alt="...">
        <!-- {{ dishPic }} -->
        dishPic
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <!-- {{ dishName }} -->
        dishName
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-icon icon="clock" scale="1"></b-icon>
      </b-col>
      <b-col>
        <!-- {{ dishCookTime }} -->
      </b-col>
      <b-col>
        <!-- {{ dishCost }} -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "recipeCard",
  props: {
      dishPic: String, 
      dishName: String,
      dishCookTime: Number,
      dishCost: Number
  },
};
</script>
