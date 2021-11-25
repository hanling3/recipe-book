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
          <button @click="favStatus"> Add to Favorite </button>
        </b-col>
        <b-col>
          <button @click="show=true">Add to Meal Plan</button>
          <stack-modal
                :show="show"
                title="Select A Date"
                save= "dateReceive"
                @save="sendShow"
                @close="show=false"
                :modal-class="{ [modalClass]: true }"
                :saveButton="{ visible: true }"
                :cancelButton="{ title: 'Close', btnClass: { 'btn btn-light': true } }"
          >
            <datepicker v-on: dateSend="dateReceive"/> 
            <h4>Choose Meal</h4>
            <div class="btn-group" role="group" aria-label="MealSelection">
              <button type="button" class="btn btn-light"><i class="bi-sunrise"></i>Breakfast</button>
              <button type="button" class="btn btn-light"><i class="bi-sun"></i>Lunch</button>
              <button type="button" class="btn btn-light"><i class="bi-moon-stars">Dinner</i></button>
            </div>

          </stack-modal>
          
        </b-col>
      </b-row>
      <!--<button class="btn btn-light" @click="show=true">Save To Plan</button>-->


    </b-card>
  </div>
</template>

<script>
import mockdata from "@/mock-data.json";
import StackModal from '@innologica/vue-stackable-modal'
import datepicker from "@/components/DatePicker.vue";

export default {
  name: "recipeDetail",
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
      
      recipes: mockdata,

      show: false,
      modalClass: '',

      dateCatch: datepicker.dateSend,
      planlist: [],
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
    dateReceive: function(date) {
        var plan = this.thedish;
        plan.date = date;
        console.log(date+"hi");
    },
    sendShow: function() {
      this.show = false;
      this.$emit("show-message", this.show);
      console.log(this.show+"hi")
      return this.show;
    },
    favStatus: function() {
      console.log( "---- favStatus is working ----")
      if (this.$addtofav == 'false') {
        this.$addtofav='true';
      } else {
        this.$addtofav='false';
      }
    }
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