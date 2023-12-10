

<script>
import Header from "./components/partials/Header.vue"
export default {
name:'App',
components:{
    Header
},
data() {
  return {
    
  }
},
}
</script>

<template>
  <div class="container">
    <Header/>
  <RouterView  />
  </div>
  
</template>

<style lang="scss" scoped>



</style>