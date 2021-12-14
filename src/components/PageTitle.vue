<template>
  <div id="pagetitle">
    <h1>{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: "pageTitle",
  props: {
      pageTitle: String
  },
};
</script>

<style scoped>
#pagetitle {
  background-color: #F7F3EF;
  position: fixed;
  text-align: left;
  top: 0%;
  padding-top: 1%;
  margin-bottom: 1%;
  font-weight: bold;
  font-size: 10%;
  width: 100%;
  z-index: 1000;
} 
</style>