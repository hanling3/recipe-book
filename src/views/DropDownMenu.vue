<template>
  <div>
    <b-dropdown id="dropdown-1" text="Cook Time" class="m-md-2">
      <b-dropdown-item> &#8804; 30 min </b-dropdown-item>
      <b-dropdown-item> &#8804; 1 h </b-dropdown-item>
      <b-dropdown-item> &#8805; 1 h </b-dropdown-item>
    </b-dropdown>
    <b-dropdown id="dropdown-2" text="Budget" class="m-md-2">
      <b-dropdown-item> $0 - $10 </b-dropdown-item>
      <b-dropdown-item> $11 - $20 </b-dropdown-item>
      <b-dropdown-item> $21 - $30 </b-dropdown-item>
      <b-dropdown-item> &#8805; $31 </b-dropdown-item>
    </b-dropdown>
    <b-dropdown id="dropdown-3" text="Dish Type" class="m-md-2">
      <b-dropdown-item> Japanese </b-dropdown-item>
      <b-dropdown-item> Korean </b-dropdown-item>
      <b-dropdown-item> Chinese </b-dropdown-item>
      <b-dropdown-item> Mexican </b-dropdown-item>
      <b-dropdown-item> American </b-dropdown-item>
    </b-dropdown>
    <b-dropdown id="dropdown-4" text="Diffculty" class="m-md-2">
      <b-dropdown-item> Easy </b-dropdown-item>
      <b-dropdown-item> Medium </b-dropdown-item>
      <b-dropdown-item> Hard </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "dropDownMenu"
};
</script>