<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="foo">foo</button>
    <button @click="bar">bar</button>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
    foo() {
      this.$router.push('/foo')
    },
    bar() {
      this.$router.push('/bar')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
