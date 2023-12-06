
<script>
import { store } from '../data/store';
export default {
name:'ProjectCard',
data() {
 return {
  store
 }
},
}
</script>

<template>
  <div class="container">
    <div class="row">

     <div v-for="project in store.project" :key="project.id" class="col-4 py-3 ">
      <div class="card h-100 " >
        <div class="card-body">
          <h5 class="card-title"> Name: {{ project.name }}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Description: {{ project.description }}</h6>
          <p class="card-text">date creation:</p>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>


<style lang="scss">

</style>