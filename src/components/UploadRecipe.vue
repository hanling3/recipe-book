<template>
  <div class="col-lg-6 col-sm-8 justify-content-center container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Dish Name:"
        label-size="lg"
        label-for="input-1"
        class="mt-3"
      >
        <b-form-input
          id="input-1"
          v-model="form.dish"
          placeholder="Enter dish name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Time Duration:"
        label-size="lg"
        label-for="input-2"
        class="mt-3"
      >
        <b-form-select
          class="col-12"
          id="input-2"
          v-model="form.cooktime"
          :options="cooktime"
          required
        ></b-form-select>
      </b-form-group>

        <!-- <b-button pill variant="outline-secondary" v-on:click="addStep"><b-icon icon="plus"></b-icon>add</b-button> -->

         <b-form-group
        id="input-group-3"
        label="Cook Difficulty:"
        label-size="lg"
        label-for="input-3"
        class="mt-3"
      >
        <b-form-select
          class="col-12"
          id="input-3"
          v-model="form.difficulty"
          :options="difficulty"
          required
        ></b-form-select>
      </b-form-group>

        <b-form-group
        id="input-group-4"
        label="Budget:"
        label-size="lg"
        label-for="input-4"
        class="mt-3"
      >
        <b-form-select
          class="col-12"
          id="input-4"
          v-model="form.budget"
          :options="budget"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Ingredient:"
        label-size="lg"
        class="mt-3"
      >
        <b-form-group
          class="mt-3"
          v-for="(ingredient, k) in form.ingredient"
          :key="k"
        >
          <b-form-input
            v-model="form.ingredient[k]"
            placeholder="ingredient"
            label-size="lg"
            required
            class="form-control"
          ></b-form-input>
          <b-button  variant="link"
            v-on:click="addItem(true)"
            v-show="k == form.ingredient.length - 1"
            ><b-icon icon="plus"></b-icon>Add</b-button
          >
          <b-button variant="link"
            v-on:click="removeItem(true, k)"
            v-show="k || (!k && form.ingredient.length > 1)"
            ><b-icon icon="dash"></b-icon>remove</b-button
          >
        </b-form-group>
      </b-form-group>

      <b-form-group
        id="input-group-6"
        label="Instruction:"
        label-size="lg"
        label-for="input-6"
        class="mt-3"
      >
        <b-form-group v-for="(instruction, k) in form.instruction" :key="k">
          <b-form-input
            v-model="form.instruction[k]"
            placeholder="step"
            label-size="lg"
            required
            class="form-control"
          ></b-form-input>
          <b-button variant="link"
            v-on:click="addItem(false)"
            v-show="k == form.instruction.length - 1"
            ><b-icon icon="plus"></b-icon>Add</b-button
          >
          <b-button variant="link"
            v-on:click="removeItem(false, k)"
            v-show="k || (!k && form.instruction.length > 1)"
            ><b-icon icon="dash"></b-icon>Remove</b-button
          >
        </b-form-group>
      </b-form-group>

      <b-form-group
        id="input-group-6"
        label="Additional tip:"
        label-size="lg"
        label-for="input-6"
        class="mt-3"
      >
        <b-form-textarea
          id="textarea"
          v-model="form.tip"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
<!-- 
      <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
      <b-button type="reset" variant="danger" class="mt-4">Reset</b-button> -->
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
export default {
  name:"UploadRecipe",
  data() {
    return {
      form: {
        dish: "",
        cooktime: null,
        difficulty: null,
        budget: null,
        ingredient: [""],
        instruction: [""],
        tip: "",
      },
      cooktime: [
        { text: "Select One", value: null },
        "<30min",
        "<1 hour",
        ">= 1 hour",
      ],
      difficulty: [
        { text: "Select One", value: null },
        "Easy",
        "Medium",
        "Hard",
      ],
      budget: [
        { text: "Select One", value: null },
        "$0-$10",
        "$1-$20",
        "$21-$30",
        ">$30"
      ],
      show: true,
    };
  },
  watch: {
      form: {
        handler(val){
          console.log('Item Changed')
          console.log(val)
          this.$emit('newrecipe',val);

        },
        deep: true
      }
    },
  methods: {
    onSubmit(event) {
      this.$uploadrecipe = "true";
      event.preventDefault();
      alert(JSON.stringify(this.form));
      // this.$emit('newrecipe',this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.dish = "";
      this.form.tip = "";
      this.form.cooktime = null;
      this.form.difficulty = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    addItem(is_ingredient) {
      if (is_ingredient) {
        this.form.ingredient.push("");
      } else {
        this.form.instruction.push("");
      }
    },
    removeItem(is_ingredient, k) {
      if (is_ingredient) {
        this.form.ingredient.splice(k, 1);
      } else {
        this.form.instruction.splice(k, 1);
      }
    },
   
  },
};
</script>
<style>
.container .btn{
	box-shadow: none !important;
  text-decoration: none;
  color: #E57B07;
  padding-left: 0px;
  
}
#input-3{
  padding: 6px 12px;
  color: grey;
  border-color:#e3e7e9;
}

#input-2{
  padding: 6px 12px;
  color: grey;
  border-color:#e3e7e9;
}

#input-4{
  padding: 6px 12px;
  color: grey;
  border-color:#e3e7e9;
}
</style>