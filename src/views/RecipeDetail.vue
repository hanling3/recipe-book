<template>
  <div id="recipeDetail" class="d-flex justify-content-center">
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
          {{ this.$thedish.cooktime }}
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

      <b-tabs content-class="mt-3" fill>
        <b-tab title="INGREDIENTS" active>
          <b-table hover :items="this.$thedish.ingredients"></b-table>
        </b-tab>
        <b-tab title="INSTRUCTIONS">
          <b-table hover :items="this.$thedish.instructions"></b-table>
        </b-tab>
        <b-tab title="UTENSIL">
          <b-table hover :items="this.$thedish.utensil"></b-table>
        </b-tab>
      </b-tabs>

      <b-row align-h="center" class="text-center add-button">
        <b-col>
          <div>
            <b-button @click="favStatus" class="btn btn-dark inline-block"> 
              Add to Favorite 
            </b-button>
            <b-modal ref="confirmFav" ok-only hide-header ok-variant="warning">
              <div class="text-center">
                <b-icon icon="check-circle" style="width: 35px; height: 35px"> </b-icon>
              </div>
              <br>
              <p class="badge2-text text-center">
                Recipe is added to farvorite.
              </p>
            </b-modal>
          </div>
        </b-col>
        <b-col>
          <b-button @click="planStatus" class="btn btn-dark inline-block">
            Add to Meal Plan
          </b-button>
          <b-modal ref="confirmPlan" ok-only hide-header ok-variant="warning">
             <div class="text-center">
            <b-icon icon="check-circle" style="width: 35px; height: 35px"> </b-icon>
            </div>
            <br>
            <p class="badge2-text text-center">
              Recipe is added to meal plan.
            </p>
          </b-modal>
        </b-col>
      </b-row>

      <b-row align-h="center" class="text-center">
        <b-col>
          <button> Add to Favorite </button>
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
  // components: {
  //   StackModal,
  //   datepicker,
  // },
  // data: function () {
  //   return {
      // show: false,
      // modalClass: "",

      // dateCatch: datepicker.dateSend,
      // planlist: [],
  //   };
  // },
  methods: {
    // dateReceive: function (date) {
    //   var plan = this.$thedish;
    //   plan.date = date;
    //   console.log(date + "hi");
    // },
    // sendShow: function () {
    //   this.show = false;
    //   this.$emit("show-message", this.show);
    //   console.log(this.show + "hi");
    //   return this.show;
    // },
    favStatus: function () {
      this.$refs['confirmFav'].show();
      console.log("---- favStatus is working ----");
      if (this.$addtofav == "false") {
        this.$addtofav = "true";
      } else {
        this.$addtofav = "false";
      }
    },
    planStatus: function () {
      this.$refs['confirmPlan'].show();
      console.log("---- planStatus is working ----");
      if (this.$addtoplan == "false") {
        this.$addtoplan = "true";
      } else {
        this.$addtoplan = "false";
      }
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
  }
};
</script>

<style scoped>
#recipeDetail {
  /* text-align: center; */
  /* position: relative; */
  padding-top:1%;
  /* padding-left:13%; */
  padding-bottom:8%;
  z-index: 3
}

.add-button .btn{
  height: 100px;
}
</style>
