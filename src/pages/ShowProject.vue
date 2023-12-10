<script>
import axios from "axios";
import { store } from "../data/store";
export default {
  name: 'ShowProject',
  data() {
    return {
      project: {}
    }
  },
  methods: {
    getApi(slug) {
      
      axios.get(store.apiUrl + "projects/" + slug)

        .then((result) => {
          console.log(result.data);
          this.project = result.data;
        });
    },
  },
  mounted(){
    this.getApi(this.$route.params.slug);
  }
}
</script>
<template>

  <h1>Info project</h1>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4>{{ project.name }}</h4>
            <p class="card-text">{{project.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>


<style>

</style>