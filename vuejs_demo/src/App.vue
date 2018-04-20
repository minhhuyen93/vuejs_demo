<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div id="app" class="col-md-12 col-lg-12">
    <ul class="nav nav-stacked main-navigation-bar">
          <li class="navigation-item"><router-link to="/learnEnergys">Go to LearnEnergys</router-link></li>
          <li class="navigation-item"><router-link to="/">Go to Home Pages</router-link></li>
    </ul>
    <div class="main-content">
    <router-view/>
    </div>
  </div>

</template>

<script>
import LearnEnergys from "@/components/LearnEnergys"

import HelloWorld from "@/components/HelloWorld"

import BootstrapVue from 'bootstrap-vue'

export default {
  name: "App",
  components: {
    HelloWorld,
    LearnEnergys,
    BootstrapVue
  }
};
</script>

<style lang="scss" scoped>
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-navigation-bar {
  list-style-type: none;
  text-align: center;
  display: inline-flex;
  top: 0;
  float: left;
}

.navigation-item {
  width: auto;
  padding: 0 10px;
}

.main-content {
  display: inline-block;
  width: 100%;
  margin-top: 60px;
}

</style>
