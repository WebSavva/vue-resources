<template>
  <li class="fade">
    <card-component class="item">
      <h3>{{ resourceData.name }}</h3>
      <button v-on:click="$emit('delete', resourceData.id)">&Cross;</button>
      <a v-bind:href="resourceData.link">Link</a>
    </card-component>
  </li>
</template>

<script>
export default {
  emits: ["delete"],
  props: {
    resourceData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem 2rem;
  grid-row-gap: 1rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 2.5rem;
  font-weight: 500;
}

button {
  justify-self: end;
  font-size: 3rem;
  color: red;
  cursor: pointer;
}

a {
  color: rgb(61, 61, 252);
  font-weight: 200;
  text-decoration: none;
  font-size: 1.8rem;
}

@media only screen and (max-width:500px) {
       .item {
           padding: .5rem 1rem;
           grid-row-gap: .5rem;
       }

       h3 {
           font-size: 2rem;
       }

       a {
           font-size: 1.5rem;
       }

       button {
           font-size: 2.5rem;
       }
    }
</style>
