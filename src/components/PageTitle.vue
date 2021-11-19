<template>
  <div id="page title">
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