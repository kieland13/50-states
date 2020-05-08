<template>
  <div id="app">
    <!-- this is where you decide what order everything goes in for components -->
    <Header></Header>
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>

<script>

/*import the header and footer components */
import Header from '@/components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header, Footer
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
