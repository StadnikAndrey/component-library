<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
   <h1 class="home__title">Component library for Vue.js version 3</h1>    
   <p class="home__subtitle">Custom components and components installed from npm. </p>
   <div class="home__txt">
    <p>Component code can be found <a class="link" href="#">here.</a></p>
  </div>
    
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style  lang="scss"> 
.home{   
  &__title{
    color: var(--color-marker);
    font-size: 45px;     
  }  
  &__subtitle{
    margin: 10px 0 15px 0;
    font-size: 28px;
  }
}
 
 
</style>
