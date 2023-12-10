

<script>
export default {
name:'Header',
}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'Home'}">home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'About'}">about</router-link>
          
        </li>
        <li>
          <router-link :to="{name: 'Contact'}">contact</router-link>
        </li>
        <li>
         <router-link :to="{name: 'Project'}">project</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

 ul{
  text-align: center;
  list-style: none;
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    &.active{
      text-decoration: underline;
    }
    &:hover{
      text-decoration: underline;
    }
  }
 }
</style>