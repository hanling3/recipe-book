<template>
  <v-date-picker class="inline-block h-full" v-model="date">
    <template v-slot="{ inputValue, togglePopover }">
      <div>
          <b-icon 
            @click="togglePopover()"
            data-placement="left"
            id="calendar" 
            icon="calendar-date" scale="2"
            viewBox="50 -2 20 20"
            class="w-4 h-4 fill-current">
          </b-icon>
  
        <input
          :value="inputValue"
          class="bg-white text-gray-700 w-full py-1 px-1 
          appearance-none border rounded-r focus:outline-none 
          focus:border-blue-500"
          readonly
        />
      </div>
    </template>
  </v-date-picker>
</template>

<script>
    export default {
        data() {
            return {
                date: new Date(),
                dateSend: new Date(2021,12,1),
            };
        },
        methods: {
            dateInput: function(input) {
                this.$emit("dateSend", input);
                console.log(this.dateSend);
            }
        }
    };
</script>