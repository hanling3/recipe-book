<template>
  <form>
      <div id="dropDownMenuContainer">
        <select id="dropDownMenu">
          <option selected>Cook Time</option>
          <option value="1">&#8804; 30 min</option>
          <option value="2">&#8804; 1 h</option>
          <option value="3">&#8805; 1 h</option>
        </select>

        <select id="dropDownMenu">
          <option selected>Budget</option>
          <option value="1">$0 - $10</option>
          <option value="2">$11 - $20</option>
          <option value="3">$21 - $30</option>
          <option value="4">&#8805; $31</option>
        </select>

        <select id="dropDownMenu">
          <option selected>Dish Type</option>
          <option value="1">American</option>
          <option value="2">Mexican</option>
          <option value="3">Chinese</option>
          <option value="4">Japanese</option>
          <option value="5">Korean</option>
        </select>

        <select id="dropDownMenu">
          <option selected>Difficulty</option>
          <option value="1">Easy</option>
          <option value="2">Medium</option>
          <option value="3">Hard</option>
        </select>
      </div>
  </form>
</template>

<script>
export default {
  name: "dropDownMenu",
};
</script>

<style >
select{
  /* margin-right: 1%; */
  /* background-color: #FEBD2F; */
  
  color: rgb(17, 17, 17);
  margin-right: 16px;
  margin-bottom: 24px;
  border-color: rgb(177, 177, 177);
  border-width: 1px;
  border-radius: 8px;
  font-size: 18px;
  padding:6px 16px 6px 16px;
  /* padding-right: 1%; */
  /* border-radius: 1%;  */
}

#dropDownMenu option{
  /* padding:6px 0px 6px 0px; */

}
</style>