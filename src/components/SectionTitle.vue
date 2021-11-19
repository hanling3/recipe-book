<template>
  <div id="section title">
    <h3>{{ sectionTitle }}</h3>
  </div>
</template>

<script>
export default {
  name: "sectionTitle",
  props: {
      sectionTitle: String
  },
};
</script>