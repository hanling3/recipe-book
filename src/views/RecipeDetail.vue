<template>
  <div id="recipeDetail">
    <b-card
      title="Kung Pao Chicken"
      img-src="require('../assets/' + dish.image)"
      img-top
    >
      <b-button-group >
        <b-button  :variant="buttonStyle1" v-on:click="display1"
          >INGREDIENTS</b-button
        >
        <b-button :variant="buttonStyle2" v-on:click="display2"
          >INSTRUCTIONS</b-button
        >
        <b-button :variant="buttonStyle3" v-on:click="display2"
          >UTENSIL</b-button
        >
      </b-button-group>

      <b-table striped hover :items="items"></b-table>

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
          <button type="button" class="btn btn-light"><i class="bi-sunrise"></i>Breakfast</button>
          <button type="button" class="btn btn-light"><i class="bi-sun"></i>Lunch</button>
          <button type="button" class="btn btn-light"><i class="bi-moon-stars">Dinner</i></button>
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

      show: false,
      show_second: false,
      show_third: false,
      modalClass: ''

    };
  },
  methods: {
    display1: function() {
      this.buttonStyle1 = "light",
      this.buttonStyle2 = "secondary",
      this.buttonStyle3 = "secondary",
      this.items = mockdata[2]["ingredients"]
    },
     display2: function() {
      this.buttonStyle2 = "light",
      this.buttonStyle1 = "secondary",
      this.buttonStyle3 = "secondary",
      this.items = mockdata[2]["instructions"]
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
   margin-left: auto;
  margin-right: auto;
}
</style>