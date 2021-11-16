<template>
<div>
  <recipeCard/>
</div>

  <!-- <div class="Browse">
    <div class="row">
      <div class="col text-start">
        <h1>Browse</h1>
      
      </div>
    </div>


    <div id="section-favorites">
      <b-row id="title-favorites">
        <b-col class="text-start">
          <h3>Favorites</h3>

        </b-col>
      </b-row>

      



      <b-row>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
      </b-row>
    </div>

    <div class="section-recommend">
       <b-row id="title-recommend">
        <b-col class="text-start">
          <h3>We recommend</h3>
        </b-col>
      </b-row>

      <b-dropdown id="dropdown-1" text="Cook Time" class="m-md-2">
        <b-dropdown-item> &#8804; 30 min </b-dropdown-item>
        <b-dropdown-item> &#8804; 1 h </b-dropdown-item>
        <b-dropdown-item> &#8805; 1 h </b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-2" text="Budget" class="m-md-2">
        <b-dropdown-item> $0 - $10 </b-dropdown-item>
        <b-dropdown-item> $11 - $20 </b-dropdown-item>
        <b-dropdown-item> $21 - $30 </b-dropdown-item>
        <b-dropdown-item> &#8805; $31 </b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-3" text="Dish Type" class="m-md-2">
        <b-dropdown-item> Japanese </b-dropdown-item>
        <b-dropdown-item> Korean </b-dropdown-item>
        <b-dropdown-item> Chinese </b-dropdown-item>
        <b-dropdown-item> Mexican </b-dropdown-item>
        <b-dropdown-item> American </b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-4" text="Diffculty" class="m-md-2">
        <b-dropdown-item> Easy </b-dropdown-item>
        <b-dropdown-item> Medium </b-dropdown-item>
        <b-dropdown-item> Hard </b-dropdown-item>
      </b-dropdown>

      <b-row>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/outofscope" tag="button">
            <b-icon icon="card-image" scale="5"></b-icon>
          </router-link>
        </b-col>
      </b-row>
    </div>
    </div>
    -->

  

</template>

<script>
import recipeCard from "@/components/RecipeCard.vue";
export default {
  components: {
    recipeCard
  }
}

</script>

