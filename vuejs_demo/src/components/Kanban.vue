<template>
<div class="left-container col-md-offset-3 col-lg-offset-3 col-md-9 col-lg-9">
      <div class="main-process col-md-12 col-lg-12">
        <div class="process-item" v-for="item in pipelineprocess" :key="item.id">
            <h3 class="process-item__title">{{item.name}}</h3>
            <span class="glyphicon glyphicon-cog icon-setting"></span>
            <span class="process-item__number">{{item.servicesRequests.lenght}}</span>
        </div>
      </div>
      <div class="content-process col-md-12 col-lg-12">
  <!--start block for new status -->
        <div class="content-process-container" v-for="item in pipelineprocess" :key="item.id">
          <div class="content-item" v-for="data in item.servicesRequests" :key="data.title">
            <i class="state-icon"/>
            <span class="content-item__title">{{data.title}}</span>
            <div class="content-item__detail">
              <p>{{data.detail}}</p>
              <p>{{data.content}}</p>
              <p class="content-item__detail--due">{{data.due}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Kanban',
  data: function () {
    return {
      pipelineprocess: [
        {
          'id': 1,
          'name': 'NEW',
          'servicesRequests': [
            {
              'title': 'SOI234 - Install',
              'detail': 'Comms4 - 3214',
              'content': 'Powercord',
              'due': 'Due: 5/4/2018'
            },
            {
              'title': 'SOI235 - Install',
              'detail': 'Comms4 - 3215',
              'content': 'Powercord',
              'due': 'Due: 6/4/2018'
            }
          ]
        },
        {
          'id': 2,
          'name': 'PENDING',
          'servicesRequests': [
            {
              'title': 'SOI244 - Install',
              'detail': 'Comms5 - 3314',
              'content': 'Powercord',
              'due': 'Due: 5/4/2018'
            },
            {
              'title': 'SOI245 - Install',
              'detail': 'Comms4 - 3315',
              'content': 'Powercord',
              'due': 'Due: 6/4/2018'
            }
          ]
        },
        {
          'id': 3,
          'name': 'SCHEDULED',
          'servicesRequests': [
            {
              'title': 'SOI244 - Install',
              'detail': 'Comms5 - 3314',
              'content': 'Powercord',
              'due': 'Due: 5/4/2018'
            },
            {
              'title': 'SOI245 - Install',
              'detail': 'Comms4 - 3315',
              'content': 'Powercord',
              'due': 'Due: 6/4/2018'
            }
          ]
        },
        {
          'id': 4,
          'name': 'IN FIELD',
          'servicesRequests': [
            {
              'title': 'SOI244 - Install',
              'detail': 'Comms5 - 3314',
              'content': 'Powercord',
              'due': 'Due: 5/4/2018'
            },
            {
              'title': 'SOI245 - Install',
              'detail': 'Comms4 - 3315',
              'content': 'Powercord',
              'due': 'Due: 6/4/2018'
            }
          ]
        },
        {
          'id': 5,
          'name': 'COMPLETED',
          'servicesRequests': [
            {
              'title': 'SOI244 - Install',
              'detail': 'Comms5 - 3314',
              'content': 'Powercord',
              'due': 'Due: 5/4/2018'
            },
            {
              'title': 'SOI245 - Install',
              'detail': 'Comms4 - 3315',
              'content': 'Powercord',
              'due': 'Due: 6/4/2018'
            },
            {
              'title': 'SOI244 - Install',
              'detail': 'Comms5 - 3314',
              'content': 'Powercord',
              'due': 'Due: 5/4/2018'
            },
            {
              'title': 'SOI245 - Install',
              'detail': 'Comms4 - 3315',
              'content': 'Powercord',
              'due': 'Due: 6/4/2018'
            },
            {
              'title': 'SOI244 - Install',
              'detail': 'Comms5 - 3314',
              'content': 'Powercord',
              'due': 'Due: 5/4/2018'
            },
            {
              'title': 'SOI245 - Install',
              'detail': 'Comms4 - 3315',
              'content': 'Powercord',
              'due': 'Due: 6/4/2018'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
// start block main-process
.main-process {
  padding: 0;
  display: flex;
}

.process-item {
  padding: 0;
  margin: 0 20px;
  font-size: 20px;
  width: 250px;
}
//end block main-process
//start block content-process
.content-process {
  padding: 0;
  border-radius: 3px;
  height: 500px;
  font-size: 15px;
  overflow-y: auto;
  display: flex;
}
.content-process-container {
  padding: 0;
  margin: 0 20px;
  padding-top: 5px;
  width: 250px;
}
.content-item {
  margin-top: 5px;
  width: 100%;
  border: 1px solid;
  border-radius: 3px;
  height: 120px;
}
.content-item__title {
  font-size: 18px;
  font-weight: bold;
}
.content-item__detail {
  text-align: center;
}
.content-item__detail--due {
  font-weight: bold;
}
//end block content-process
//start block icon
.icon-setting {
  display: block;
  width: 100%;
}
// end block icon
</style>
