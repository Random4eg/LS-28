<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
  

    <div class="wrapper">
          <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/favorite">Favorite</RouterLink>
        <RouterLink to="/trending">Trending</RouterLink>

     
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wraper {
	padding: 40px;
	background: #21201e;
	height: 100%;
	min-width: 274px;
	box-shadow: 2px 0px 90px rgba(97, 0, 194, 0.4);
	
}
.nav {
	
	font-weight: 700;
	font-size: 16rem;
	line-height: 150%;
}
.sidebar__page {
	margin-top: 58rem;
	margin-bottom: 100rem;
}
.sidebar__social {
	margin-bottom: 200rem;
}
li {
	display: flex;
	margin-bottom: 35rem; 
}

</style>
