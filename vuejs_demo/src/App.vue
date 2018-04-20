<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div id="app">
    <router-view/>
    <ul class="nav nav-stacked" style="list-style-type: none">
          <li><router-link to="/learnEnergys">Go to LearnEnergys</router-link></li>
          <li><router-link to="/">Go to Home Pages</router-link></li>
    </ul>
  </div>

</template>

<script>
import LearnEnergys from "@/components/LearnEnergys"

import HelloWorld from "@/components/HelloWorld"

export default {
  name: "App",
  components: {
    HelloWorld,
    LearnEnergys
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

//@import "./assets/sass/main.scss"

</style>
