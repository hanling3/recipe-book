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


      <b-button v-b-modal.modal-1>Add recipe</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <Upload-Recipe  v-on:newrecipe="addRecipe"></Upload-Recipe>
  </b-modal>


      <!-- <b-button @click="UploadRecipe()">Add recipe</b-button> -->
    </div>
  </div>
</template>

<script>
import UploadRecipe from '../components/UploadRecipe.vue';
    export default{

  components: {
      UploadRecipe
  },
        data() {
          return{
          recipes:[],
          }
    },
    methods: {
      // UploadRecipe(){
      //      this.$router.push('/favorites/Uploadrecipe'); 
      // }
      addRecipe(recipe){
        console.log(recipe)
        this.recipes.push(recipe)
        console.log(this.recipes)
      }
    }
    }

</script>

<style>

</style>