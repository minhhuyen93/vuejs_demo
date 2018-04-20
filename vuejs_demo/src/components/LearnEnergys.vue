<template>
  <div class="row col-lg-12">
      <div class="column">
        <span class="">NEW
        </span>
        <div class="container-fluid">
          <div v-for="machine of machines" v-bind:key="machine.id">
            <div class="container-fluid machine-contents">
              <draggable v-model="machine.jobs">
                <transition-group name="list-complete">
                  <div v-for="job in machine.jobs" v-bind:key="job.jobNumber" class="list-complete-item">
                    <div>{{ job.jobNumber }}</div>
                  </div>
                </transition-group>
              </draggable>
            </div>
        </div>
      </div>
    </div>
    <div class="column">
      <span class="">PENDING
        </span>
        <div class="container-fluid">
          <div v-for="machine of machines" v-bind:key="machine.id">
            <div class="container-fluid machine-contents">
              <draggable v-model="machine.jobs">
                <transition-group name="list-complete">
                  <div v-for="job in machine.jobs" v-bind:key="job.jobNumber" class="list-complete-item">
                    <div>{{ job.jobNumber }}</div>
                  </div>
                </transition-group>
              </draggable>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'LearnEnergys',
  components: {
    draggable
  },
  data: function () {
    return {
      machines: [
        {
          name: 'H1',
          id: 1,
          jobs: [
            {
              jobNumber: '4037-12'
            },
            {
              jobNumber: '14038-13'
            },
            {
              jobNumber: '14048-15'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style>
.machine-contents {
  width: 200px;
  text-align: center;
  display: inline-block;
}
.list-complete-item {
    padding: 4px;
    margin-top: 4px;
    border: solid 1px;
    transition: all 1s;
  }
  .list-complete-enter, .list-complete-leave-active {
    opacity: 0;
  }

.column {
    float: left;
    width: 16.66%;
    border-radius: 5px;
    margin: 0 5px;
    border: 1px solid;
    height: 300px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}
</style>
