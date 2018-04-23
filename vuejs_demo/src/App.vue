<template>
  <div id="app" class="col-md-12 col-lg-12">
    <!-- <ul class="nav nav-stacked main-navigation-bar">
        <li class="navigation-item"><router-link to="/learnEnergys">Go to LearnEnergys</router-link></li>
        <li class="navigation-item"><router-link to="/">Go to HomePage</router-link></li>
    </ul>
    <div class="main-content">
        <router-view></router-view>
    </div> -->
    <div class="row">
        <div class="col-md-6">
            <hello-world></hello-world>
        </div>
        <div class="col-md-6">
            <done></done>
        </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

import Done from './components/Done'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Done
  }
}
</script>

<style lang="scss">
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
