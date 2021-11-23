<template>
  <div id="recipeDetail">
    <!-- <b-card
      :title= thedish.dish
      :img-src="require('../assets/' + $event + '.jpg')"
      img-top
    > -->
    <b-card
      :title="thedish.dish"
      :img-src="require('../assets/' + thedish.reference + '.jpg')"
      img-top
      img-height="300px"
      style="width: 500px"
      align="center"
    >
      <b-row align-h="center" class="text-center">
        <b-col cols="3">
          <b-icon icon="stopwatch" class="icons"></b-icon><br />
          {{ thedish.cooktime }} min
          <p>COOK TIME</p>
        </b-col>

        <b-col cols="3">
          <b-icon icon="cash-stack" class="icons"></b-icon><br />
          {{ thedish.budget }}
          <p>PER SERVE</p>
        </b-col>

        <b-col cols="3">
          <b-icon icon="star" class="icons"></b-icon><br />
          {{ thedish.difficulty }}
          <p>DIFFICULTY</p>
        </b-col>
      </b-row>

      <b-button-group>
        <b-button :variant="buttonStyle1" v-on:click="display1"
          >INGREDIENTS</b-button
        >
        <b-button :variant="buttonStyle2" v-on:click="display2"
          >INSTRUCTIONS</b-button
        >
        <b-button :variant="buttonStyle3" v-on:click="display3"
          >UTENSIL</b-button
        >
      </b-button-group>

      <b-table striped hover :items="items"></b-table>

      <b-row align-h="center" class="text-center">
        <b-col>
          <button> Add to Favorite </button>
        </b-col>
        <b-col>
          <button>Add to Meal Plan</button>
        </b-col>
      </b-row>
      <button class="btn btn-light" @click="show=true">Save To Plan</button>

      <stack-modal
                :show="show"
                title="Select A Date"
                @close="show=false"
                :modal-class="{ [modalClass]: true }"
                :saveButton="{ visible: true }"
                :cancelButton="{ title: 'Close', btnClass: { 'btn btn-light': true } }"
      >
        <datepicker />
        <h4>Choose Meal</h4>
        <div class="btn-group" role="group" aria-label="MealSelection">
          <button type="button" class="btn btn-light"><i class="bi bi-sunrise"></i></button>
          <button type="button" class="btn btn-light"><i class="bi bi-sun"></i></button>
          <button type="button" class="btn btn-light"><i class="bi bi-moon-stars"></i></button>
        </div>

      </stack-modal>
      

    </b-card>
  </div>
</template>

<script>
import mockdata from "@/mock-data.json";
import StackModal from '@innologica/vue-stackable-modal'
import datepicker from "@/components/DatePicker.vue";

export default {
  name: "recipeCard",
  components: {
    StackModal,
    datepicker
  },
  data() {
    return {
      buttonStyle1: "light",
      buttonStyle2: "secondary",
      buttonStyle3: "secondary",
      items: mockdata[2]["ingredients"],
      thedish: mockdata[2],

      show: false,
      show_second: false,
      show_third: false,
      modalClass: ''

    };
  },
  methods: {
    display1: function () {
      (this.buttonStyle1 = "light"),
        (this.buttonStyle2 = "secondary"),
        (this.buttonStyle3 = "secondary"),
        (this.items = mockdata[2]["ingredients"]);
    },
    display2: function () {
      (this.buttonStyle2 = "light"),
        (this.buttonStyle1 = "secondary"),
        (this.buttonStyle3 = "secondary"),
        (this.items = mockdata[2]["instructions"]);
    },
     display3: function() {
      this.buttonStyle3 = "light",
      this.buttonStyle1 = "secondary",
      this.buttonStyle2 = "secondary",
      this.items = mockdata[2]["utensil"]
    }, 
  }
};
</script>

<style scoped>
#recipeDetail {
  text-align: center;
  margin-left: 450px;
  margin-right: auto;
  margin-bottom: 200px;
}
</style>