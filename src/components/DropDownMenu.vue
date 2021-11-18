<template>
  <form>
    <div class="form-row align-items-center">
      <div class="col-auto my-1">
        <!-- <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label> -->
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
          <option selected>Cook Time</option>
          <option value="1-1">&#8804; 30 min </option>
          <option value="1-2">&#8804; 1 h </option>
          <option value="1-3">&#8805; 1 h </option>
        </select>

         <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
          <option selected>Budget</option>
          <option value="2-1"> $0 - $10 </option>
          <option value="2-2"> $11 - $20  </option>
          <option value="2-3"> $21 - $30  </option>
          <option value="2-4"> &#8805; $31 </option>
        </select>

         <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
          <option selected>Dish Type</option>
          <option value="3-1">American</option>
          <option value="3-2">Mexican</option>
          <option value="3-3">Chinese</option>
          <option value="3-4">Japanese</option>
          <option value="3-5">Korean</option>
        </select>

        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
          <option selected>Difficulty</option>
          <option value="1-1"> Easy </option>
          <option value="1-2"> Medicum</option>
          <option value="1-3"> Hard </option>
        </select>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "dropDownMenu",
};
</script>

<style scoped>
#inlineFormCustomSelect {
    margin-right: 30px;
}
</style>