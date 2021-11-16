<template>
  <div class="favorites">
    <h1>Favorites</h1>
    <!-- <h2> Favorites | Created Recipes </h2>  -->
    <div>
      <b-tabs content-class="mt-3" fill>
        <b-tab title="Favorites" active><p>I'm the first tab</p></b-tab>
        <b-tab title="Created Recipes"><p>I'm the second tab</p></b-tab>
        <!-- <b-tab title="Very, very long title"
          ><p>I'm the tab with the very, very long title</p></b-tab>
        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab> -->
      </b-tabs>
      <b-button @click="UploadRecipe()">Add recipe</b-button>
      
    </div>
  </div>
</template>

<script>
    export default{
        data() {
    },
    methods: {
      UploadRecipe(){
           this.$router.push('/favorites/Uploadrecipe'); 
      }
    }
    }

</script>

<style>

</style>