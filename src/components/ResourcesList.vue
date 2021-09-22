<template>
  <ul v-if="resources.length">
    <Resource
      v-for="resource in resources"
      v-on:delete="deleteResource"
      :key="resource.id"
      :resourceData="resource"
    />
  </ul>
  <p v-else>There are no resources added yet!</p>
</template>

<script>
import Resource from "./Resource.vue";

export default {
  components: {
    Resource,
  },
  inject: ["resources", "deleteResource"],
};
</script>

<style scoped>
ul {
  list-style: none;
}
ul > * {
  animation: fade 0.3s linear;
}

p {
  background: rgba(252, 59, 59, 0.692);
  border-radius: 5px;
  text-align: center;
  padding: 2rem 1rem;
  color: #fff;
  font-size: 2rem;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
