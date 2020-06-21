<template>
  <div id="app">
    <CartList/>
    <ProductList/>
  </div>
</template>

<script>
import CartList from '@/components/CartList'
import ProductList from '@/components/ProductList'

export default {
  name: 'App',
  components: {
    CartList, ProductList
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F2F6FA;
}
body{
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
</style>
