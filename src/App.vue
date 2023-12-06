<script >
import axios from "axios";
import { store } from "./data/store";
export default {
  name: "App",
  data() {
    return {
      titolo: "Hello World",
    };
  },

  methods: {
    getApi() {
      axios
        .get(store.apiUrl + "projects")

        .then((response) => {
          console.log(response.data);
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <h1>{{ titolo }}</h1>
</template>

<style lang="scss">
</style>
