<template>
  <div class="form-group">
    <input
      :value="value"
      class="input"
      v-bind:class="{ active: floatedLabel }"
      v-bind:name="name"
      v-bind:id="id"
      v-bind:type="type"
      @input="onChangeHandler($event.target.value)"
      @focus="setFloatedLabel(true)"
      @blur="toggleLabel"
    />
    <label :for="id" v-bind:class="{ 'floated-label': floatedLabel }">{{
      labelText
    }}</label>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
    labelText: String,
    onChangeHandler: Function,
    type: String,
    value: String,
  },
  data() {
    return {
      floatedLabel: false,
    };
  },
  methods: {
    setFloatedLabel(value) {
      this.floatedLabel = value;
    },
    toggleLabel() {
      this.setFloatedLabel(!!this.value.length);
    },
  },
};
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  position: relative;
}

label {
  position: absolute;
  bottom: 1.7rem;
  left: 1.6rem;
  transition: all 0.2s ease-in;
  font-size: 1.6rem;
  background: #fff;
  height: min-content;
  z-index: 5;
  transform-origin: left top;
}

.floated-label {
  padding: 0 1rem;
  transform: scale(0.8);
  top: -1.2rem;
  left: 0.5rem;
  color: blue;
}

.input {
  padding: 1.3rem;
  font-size: 0.95em;
  border-radius: 5px;
  font-size: 1.8rem;
  border: 1px solid rgba(105, 105, 105, 0.301);
  opacity: 0.8;
}

.input.active {
  border-color: blue;
}
</style>
