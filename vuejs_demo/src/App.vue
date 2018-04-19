<template>
  <div id="app">
    <router-view/>
    <learn-energys></learn-energys>
    <hello-world></hello-world>
  </div>
</template>

<script>
import LearnEnergys from '@/components/LearnEnergys'

import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LearnEnergys
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
