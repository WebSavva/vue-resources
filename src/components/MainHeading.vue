<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  props: {
    message: {
      required: false,
      type: String,
      default: "Hello World",
    },
  },
};
</script>

<style>
h1 {
  font-size: 4rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>
