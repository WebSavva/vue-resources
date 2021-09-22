<template>
  <main-heading message="Resources"></main-heading>
  <tabs-keeper
    :activeComponent="activeComponent"
    :switchableList="switchableComponents"
    @switch-component="switchComponent"
  >
    <template v-slot:body>
      <keep-alive>
        <component :is="activeComponent" />
      </keep-alive>
    </template>
  </tabs-keeper>
</template>

<script>
import MainHeading from "./components/MainHeading.vue";
import ResourcesList from "./components/ResourcesList.vue";
import TabsKeeper from "./components/TabsKeeper.vue";
import NewResource from "./components/NewResource.vue";
export default {
  components: {
    MainHeading,
    ResourcesList,
    TabsKeeper,
    NewResource,
  },
  provide() {
    return {
      resources: this.resources,
      deleteResource: this.deleteResource,
      addResource: this.addResource,
    };
  },
  data() {
    let resources = localStorage.getItem("resources");
    if (resources) {
      resources = JSON.parse(resources);
    } else {
      resources = [
        {
          id: 1,
          name: "Github",
          link: "https://github.com/",
        },
        {
          id: 2,
          name: "Google",
          link: "https://google.com/",
        },
      ];
    }

    return {
      switchableComponents: [
        {
          name: "NewResource",
          displayText: "New Resource",
        },
        {
          name: "ResourcesList",
          displayText: "Resources",
        },
      ],
      activeComponent: resources.length ? "ResourcesList" : "NewResource",
      resources,
    };
  },
  methods: {
    deleteResource(id) {
      const toBeRemovedId = this.resources.findIndex((res) => res.id === id);
      this.resources.splice(toBeRemovedId, 1);
      this.saveResources();
    },
    addResource(name, link) {
      this.resources.unshift({
        id: new Date().toISOString(),
        name,
        link,
      });
      this.switchComponent("ResourcesList");
      this.saveResources();
    },
    switchComponent(name) {
      this.activeComponent = name;
    },
    saveResources() {
      localStorage.setItem("resources", JSON.stringify(this.resources));
    },
  },
};
</script>

<style>
html {
  font-size: 62.5%;
}

*,
*::after,
*::before,
*:focus {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: none;
  outline: none;
  border: none;
  font-family: inherit;
}

body {
  width: 100%;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(65, 63, 63);
  background-color: rgb(231, 231, 231);
}

button {
  cursor: pointer;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: inherit;
}
body > * {
  margin: 2rem 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fade {
  animation: fade 300ms linear;
}
</style>
