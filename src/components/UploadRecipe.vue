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

    <b-form-group
        id="input-group-3"
        label="Ingredient:"
        label-size="lg"
        label-for="input-3"
        inline
        class="mt-3"
      >
      <b-row>
        <b-col>
          <b-form-group
        id="input-group-3"
        label="Item:"
      >
        <b-form-input
          id="input-3"
          v-model="form.ingredient[item]"
          placeholder="Enter item"
          required
        ></b-form-input>
        </b-form-group>
        </b-col>
          <b-col>
          <b-form-group
        id="input-group-3"
        label="Ratio:"
      >
        <b-form-input
          id="input-3"
          v-model="form.ingredient[ratio]"
          placeholder="Enter ratio"
          required
        ></b-form-input>
        </b-form-group>
        </b-col>
        </b-row>
</b-form-group>

      <b-form-group
        id="input-group-1"
        label="Step:"
        label-size="lg"
        label-for="input-1"
        class="mt-3"
      >
        <b-form-input
          id="input-4"
          v-model="form.step"
          placeholder="Step"
          required
        ></b-form-input>
        <b-button v-on:click="addStep">Add Step</b-button>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Additional tip:"
        label-size="lg"
        label-for="input-4"
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
  data() {
    return {
      item:"",
      ratio:"",
      form: {
        name: "",
        time: null,
        ingredient:[],
        step: "",
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
    addItem(){
    

    },
    addStep(){

    }
  },
};
</script>