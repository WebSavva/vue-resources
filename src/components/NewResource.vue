<template>
  <form class="fade" @submit.prevent="submitForm">
    <new-resource
      id="name"
      type="text"
      labelText="Name"
      name="name"
      :value="newResourceData.name"
      :onChangeHandler="changeName"
    />
    <new-resource
      id="link"
      type="url"
      labelText="Link"
      name="link"
      :value="newResourceData.link"
      :onChangeHandler="changeLink"
    />

    <button type="submit" v-bind:disabled="!isDataValid">Submit</button>
  </form>
</template>

<script>
import NewResource from "./UI/InputGroup.vue";
export default {
  components: {
    NewResource,
  },
  inject: ["addResource"],
  data() {
    return {
      newResourceData: {
        name: "",
        link: "",
      },
    };
  },
  computed: {
    isDataValid() {
      return Object.values(this.newResourceData).every((val) => !!val.length);
    },
  },
  methods: {
    changeName(value) {
      this.newResourceData.name = value;
    },
    changeLink(value) {
      this.newResourceData.link = value;
    },
    submitForm() {
      if (!this.isDataValid) return;
      this.addResource(this.newResourceData.name, this.newResourceData.link);
      this.newResourceData = {
        name: "",
        link: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  padding: 2rem 3rem;
}

button {
  padding: 1rem 1.5rem;
  font-size: 2.2rem;
  color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  background: rgb(138, 209, 31);
  border-radius: 5px;
  font-weight: 200;
  transition: all 0.2s ease-in;
  width: 100%;
}
button:disabled {
  background: gray;
}
</style>
