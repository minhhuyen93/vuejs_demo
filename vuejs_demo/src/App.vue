<template>
  <div id="app" class="col-md-12 col-lg-12">
    <kanban></kanban>
  </div>
</template>

<script>
import Kanban from './components/Kanban'

export default {
  name: 'App',
  components: {
    Kanban
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

.main-process {
  display: inline-block;
}
</style>
