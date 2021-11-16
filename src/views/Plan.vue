<template>
  <div class="plan">
    <h1>Meal Plan </h1>
    <div id="datepicker">
      <draggable-cal></draggable-cal>
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
