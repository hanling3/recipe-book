<template>
  <div class="plan">
    <div class="row">
        <div class="col text-start">
          <h1>Meal Plan</h1>
        </div>
    </div>

    <div id="datepicker">
      <draggable-cal></draggable-cal>
    </div>

    <div id="meals">
      <b-row id="breakfast">
        <b-col class="text-start">
          <h3>Breakfast</h3>
        </b-col>
      </b-row>

      <router-link to="/browse" style="text-decoration: none; color: inherit;">
        <b-row id="plan1">
          <div id="plancard" class="col justify-content-center mb-3">
            <div class="card h-400 bg-light text-center" style=" height: 10rem; line-height:120px;">
              <div class="card-body align-items-center">
                <p class="card-text text-muted">
                  <b-icon-search></b-icon-search> Find a recipe.
                </p>
              </div>
            </div>
          </div>
        </b-row>
      </router-link>

      <b-row id="lunch">
        <b-col class="text-start">
          <h3>Lunch</h3>
        </b-col>
      </b-row>

      <router-link to="/browse" style="text-decoration: none; color: inherit;">
        <b-row id="plan2">
          <div id="plancard" class="col justify-content-center mb-3">
            <div class="card h-400 bg-light text-center" style=" height: 10rem; line-height:120px;">
              <div class="card-body align-items-center">
                <p class="card-text text-muted">
                  <b-icon-search></b-icon-search> Find a recipe.
                </p>
              </div>
            </div>
          </div>
        </b-row>
      </router-link>

      <b-row id="dinner">
        <b-col class="text-start">
          <h3>Dinner</h3>
        </b-col>
      </b-row>

      <router-link to="/browse" style="text-decoration: none; color: inherit;">
        <b-row id="plan3">
          <div id="plancard" class="col justify-content-center mb-3">
            <div class="card h-400 bg-light text-center" style=" height: 10rem; line-height:120px;">
              <div class="card-body align-items-center">
                <p id="cardcontent" class="card-text text-muted">
                  <b-icon icon="search" id="search"></b-icon> Find a recipe.
                </p>
              </div>
            </div>
          </div>
        </b-row>
      </router-link>
    </div>
  </div>

</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import DraggableCal from 'vue-draggable-cal';

  export default {
    name: 'plan',
    components: {
      DraggableCal
    },
    data() {
      return {
        planFind: "Find a recipe.",
      }
    },
    methods: {
      cardDisplay() {
        if (this.planFind !== "Find a recipe.") {
          var searchIcon = document.getElementById("search");
          searchIcon.remove();
        }
      }
    }
  }
</script>

<style>

button {
  /* font-style: normal; */
  font-weight: bold;
  font-size: 20px;
  width: 150px;
  text-align: center;
  margin: 5px;
  padding: 25px;
  border: 1px solid #d6d6d6;
  border-radius: 5px; 
    /* border-color: #c4c4c4; */ 
  box-shadow: 1px 1px #cecdcd;
  background-color: white;
}

.content {
  margin: 200px;
}

</style>
