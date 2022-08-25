<template>   
   <h1 class="home__title">Component library for Vue.js version 3</h1>    
   <p class="home__subtitle">Custom components and components installed from npm. </p>
   <div class="home__txt">
    <p>Component code can be found <a class="link" href="https://github.com/StadnikAndrey/component-library">here.</a></p>
  </div>
    
</template>

<script>

export default {
  name: 'Home'   
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
