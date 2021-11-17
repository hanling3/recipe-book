<template>
  <div class="col-lg-6 col-sm-8 justify-content-center container">
    <h1>Create Your recipe</h1>
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
          v-model="form.name"
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
          v-model="form.time"
          :options="time"
          required
        ></b-form-select>
      </b-form-group>

      <!-- <b-form-group
        id="input-group-3"
        label="Ingredient:"
        label-size="lg"
        class="mt-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.item"
          placeholder="Enter item"
          required
        ></b-form-input>
        <b-button v-on:click="addStep">Add item</b-button>
      </b-form-group> -->
      <b-form-group
        id="input-group-3"
        label="Ingredient:"
        label-size="lg"
        class="mt-3"
      >
        <b-form-group
          class="mt-3"
          v-for="(ingredient, k) in form.ingredients"
          :key="k"
        >
          <b-form-input
            v-model="form.ingredients[k]"
            placeholder="ingredient"
            label-size="lg"
            required
            class="form-control"
          ></b-form-input>
          <b-button
            v-on:click="addItem(true)"
            v-show="k == form.ingredients.length - 1"
            >Add item</b-button
          >
          <b-button
            v-on:click="removeItem(true, k)"
            v-show="k || (!k && form.ingredients.length > 1)"
            >remove item</b-button
          >
        </b-form-group>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Step:"
        label-size="lg"
        label-for="input-4"
        class="mt-3"
      >
        <b-form-group v-for="(step, k) in form.steps" :key="k">
          <b-form-input
            v-model="form.steps[k]"
            placeholder="step"
            label-size="lg"
            required
            class="form-control"
          ></b-form-input>
          <b-button
            v-on:click="addItem(false)"
            v-show="k == form.steps.length - 1"
            >Add item</b-button
          >
          <b-button
            v-on:click="removeItem(false, k)"
            v-show="k || (!k && form.steps.length > 1)"
            >remove item</b-button
          >
        </b-form-group>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Additional tip:"
        label-size="lg"
        label-for="input-5"
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

      <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
      <b-button type="reset" variant="danger" class="mt-4">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name:"UploadRecipe",
  data() {
    return {
      form: {
        name: "",
        time: null,
        ingredients: [""],
        steps: [""],
        tip: "",
      },
      time: [
        { text: "Select One", value: null },
        "<30min",
        "<1 hour",
        ">= 1 hour",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.$emit('newrecipe',this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.tip = "";
      this.form.time = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    addItem(is_ingredients) {
      if (is_ingredients) {
        this.form.ingredients.push("");
      } else {
        this.form.steps.push("");
      }
    },
    removeItem(is_ingredients, k) {
      if (is_ingredients) {
        this.form.ingredients.splice(k, 1);
      } else {
        this.form.steps.splice(k, 1);
      }
    },
    addStep() {},
  },
};
</script>