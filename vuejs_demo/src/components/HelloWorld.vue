<template>
    <div class="todolist not-done">
    <h1>Todos</h1>
    <input type="text" v-model="holder" class="form-control add-todo" placeholder="Add todo">
    <button id="checkAll" class="btn btn-success" :disabled="holder==''" @click="add_todo">Add Todo</button>
    <hr>
    <ul id="sortable" class="list-unstyled" v-if="not_done_todos">
      <li class="ui-state-default" v-for="todo in not_done_todos" :key="todo.id">
        <div class="checkbox">
          <label>
              <input type="checkbox" @click="done_todo(todo.todo)"  :value="todo.todo" :checked="todo.status" />{{todo.todo}}
          </label>
        </div>
      </li>
    </ul>
    <div class="todo-footer" v-if="not_done_todos">
      <strong><span class="count-todos">{{not_done_todos.length}}</span></strong> Item(s) Left
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      holder: ''
    }
  },
  methods: {
    add_todo: function () {
      this.$store.dispatch('ADD_COMMENT', this.holder)
      this.holder = ''
    },
    done_todo: function (comment) {
      this.$store.dispatch('DONE_COMMENT', comment)
    }
  },
  computed: {
    not_done_todos: function () {
      return this.$store.getters.not_done
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
