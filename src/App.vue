<script >
import axios from "axios";
import { store } from "./data/store";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  name: "App",
  components: {
    ProjectCard,
},
  data() {
    return {
    
    };
  },

  methods: {
    getApi() {
      
      axios.get(store.apiUrl + "projects")

        .then((result) => {
          console.log(result.data);
          store.project = result.data;
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <ProjectCard/>
</template>

<style lang="scss">
</style>
