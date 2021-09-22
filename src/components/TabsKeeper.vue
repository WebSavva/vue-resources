<template>
  <div class="tabs">
    <div class="tabs__head">
      <button
        v-for="{ name, displayText } in switchableList"
        :key="name"
        v-bind:class="{ active: activeComponent === name }"
        @click="$emit('switch-component', name)"
      >
        {{ displayText }}
      </button>
    </div>
    <div class="tabs__body">
      <slot name="body" class="fade"></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["switch-component"],
  props: {
    switchableList: Array,
    activeComponent: String,
    selectComp: Function,
  },
};
</script>

<style scoped>
.tabs {
  margin: 2rem 0;
  width: 70rem;
}

.tabs__head {
  display: flex;
  margin-left: 0.5rem;
  transform: translateY(1px);
}

button {
  border: 1px solid rgba(172, 171, 171, 0.726);
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(179, 175, 175);
  font-weight: 500;
  z-index: -1;
  background: rgba(238, 236, 236, 0.836);
}
button.active {
  background-color: #fff;
  border-bottom: none;
  color: rgb(77, 77, 77);
}

.tabs__body {
  border: 1px solid rgba(172, 171, 171, 0.726);
  background-color: #fff;
  padding: 2rem 6rem;
  border-radius: 5px;
  min-height: 70vh;
}
@media only screen and (max-width: 800px) {
  .tabs {
    width: 95%;
  }
  button {
    font-size: 1.4rem;
  }
  .tabs__body {
    padding: 1rem;
  }
}
</style>
