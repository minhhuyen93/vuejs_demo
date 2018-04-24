<template>
  <div class="left-container">
    <div class="main-process">
      <div class="process-item">
          <h3 class="process-item__title">New</h3>
          <i class="setting-icon"/>
          <span class="process-item__number"> (3)</span>
      </div>
      <div class="process-item">
          <h3 class="process-item__title">Pending</h3>
          <i class="setting-icon"/>
          <span class="process-item__number"> (5)</span>
      </div>
      <div class="process-item">
          <h3 class="process-item__title">Scheduled</h3>
          <i class="setting-icon"/>
          <span class="process-item__number"> (4)</span>
      </div>
      <div class="process-item">
          <h3 class="process-item__title">In Field</h3>
          <i class="setting-icon"/>
          <span class="process-item__number"> (2)</span>
      </div>
      <div class="process-item">
          <h3 class="process-item__title">Compleled</h3>
          <i class="setting-icon"/>
          <span class="process-item__number"> (99) </span>
      </div>
    </div>
    <div class="content-process">
<!--start block for new status -->
      <div class="content-process-container">
        <div class="content-item">
          <i class="state-icon"/>
          <span class="content-item__title"> SOI234 - Install</span>
          <div class="content-item__detail">
            <p>Comms4 - 3213</p>
            <p>Powercord</p>
            <p class="content-item__detail--due">Due: 3/4/2018</p>
          </div>
        </div>
        <div class="content-item">
          <i class="state-icon"/>
          <span class="content-item__title"> SOI235 - Install</span>
          <div class="content-item__detail">
            <p>Comms4 - 3214</p>
            <p>Powercord</p>
            <p class="content-item__detail--due">Due: 5/4/2018</p>
          </div>
        </div>
      </div>
<!-- end block for new status -->
<!--start block for new pending -->
      <div class="content-process-container">
        <div class="content-item">
          <i class="state-icon"/>
          <span class="content-item__title"> SOI234 - Install</span>
          <div class="content-item__detail">
            <p>Comms4 - 3213</p>
            <p>Powercord</p>
            <p class="content-item__detail--due">Due: 3/4/2018</p>
          </div>
        </div>
        <div class="content-item">
          <i class="state-icon"/>
          <span class="content-item__title"> SOI235 - Install</span>
          <div class="content-item__detail">
            <p>Comms4 - 3214</p>
            <p>Powercord</p>
            <p class="content-item__detail--due">Due: 5/4/2018</p>
          </div>
        </div>
      </div>
<!-- end block for PEDNING status -->
<!--start block for new SCHEDULED -->
      <div class="content-process-container">
        <div class="content-item">
          <i class="state-icon"/>
          <span class="content-item__title"> SOI234 - Install</span>
          <div class="content-item__detail">
            <p>Comms4 - 3213</p>
            <p>Powercord</p>
            <p class="content-item__detail--due">Due: 3/4/2018</p>
          </div>
        </div>
        <div class="content-item">
          <i class="state-icon"/>
          <span class="content-item__title"> SOI235 - Install</span>
          <div class="content-item__detail">
            <p>Comms4 - 3214</p>
            <p>Powercord</p>
            <p class="content-item__detail--due">Due: 5/4/2018</p>
          </div>
        </div>
      </div>
<!-- end block for SCHEDULED status -->
<!--start block for new IN FIELD -->
      <div class="content-process-container">
        <div class="content-item">
          <i class="state-icon"/>
          <span class="content-item__title"> SOI234 - Install</span>
          <div class="content-item__detail">
            <p>Comms4 - 3213</p>
            <p>Powercord</p>
            <p class="content-item__detail--due">Due: 3/4/2018</p>
          </div>
        </div>
        <div class="content-item">
          <i class="state-icon"/>
          <span class="content-item__title"> SOI235 - Install</span>
          <div class="content-item__detail">
            <p>Comms4 - 3214</p>
            <p>Powercord</p>
            <p class="content-item__detail--due">Due: 5/4/2018</p>
          </div>
        </div>
      </div>
<!-- end block for IN FIELD status -->
<!--start block for new COMPLETED -->
      <div class="content-process-container">
        <div class="content-item">
          <i class="state-icon"/>
          <span class="content-item__title"> SOI234 - Install</span>
          <div class="content-item__detail">
            <p>Comms4 - 3213</p>
            <p>Powercord</p>
            <p class="content-item__detail--due">Due: 3/4/2018</p>
          </div>
        </div>
        <div class="content-item">
          <i class="state-icon"/>
          <span class="content-item__title"> SOI235 - Install</span>
          <div class="content-item__detail">
            <p>Comms4 - 3214</p>
            <p>Powercord</p>
            <p class="content-item__detail--due">Due: 5/4/2018</p>
          </div>
        </div>
      </div>
<!-- end block for COMPLETED status -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
