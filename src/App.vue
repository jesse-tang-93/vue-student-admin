<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from "./components/layout";
export default {
  name: "App",
  components: { Layout },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
