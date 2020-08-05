<template>
  <md-layout class="md-alignment-top-right">
    <md-layout-item class="container">
      <md-field>
        <md-input
          id="header"
          v-model="currentTodo"
          @keydown.enter="addTodo()"
          placeholder="Add a todo"
        ></md-input>
      </md-field>
      <md-list class="todos">
        <md-list-item
          v-for="todo in todos"
          :key="todo.id"
          :class="{editing: todo.editing}"
          @dblclick="toggleEditingTodo(todo)"
        >
          <md-field v-if="todo.editing">
            <md-input
              v-if="todo.editing"
              v-model="todo.label"
              @keydown.enter="toggleEditingTodo(todo)"
            ></md-input>
          </md-field>
          <md-checkbox v-if="!todo.editing" class="stay-small" v-model="todo.completed"></md-checkbox>
          <span v-if="!todo.editing" :class="{done: todo.completed}">{{ todo.label }}</span>
          <div class="md-alignment-center-right">
            <md-button
              v-if="!todo.editing"
              class="md-icon-button md-raised md-dense md-primary"
              @click="removeTodo(todo)"
            >
              <md-icon>clear</md-icon>
            </md-button>
            <md-button
              class="md-icon-button md-raised md-dense md-primary"
              @click="toggleEditingTodo(todo)"
            >
              <md-icon v-if="!todo.editing">edit</md-icon>
              <md-icon v-if="todo.editing">done</md-icon>
            </md-button>
          </div>
        </md-list-item>
      </md-list>
    </md-layout-item>
  </md-layout>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (!this.currentTodo) {
        return;
      }
      {
        this.todos.push({
          id: this.todos.length,
          label: this.currentTodo,
          completed: false,
          editing: false,
        });
        this.currentTodo = "";
      }
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    toggleEditingTodo(todo) {
      todo.editing = !todo.editing;
    },
  },
};
</script>


<style>
.container {
  max-width: 600px;
  margin: auto;
  display: block;
}

#header,
#header.md-has-placeholder,
#header.md-has-value {
  font-size: 1.5rem;
}

.done {
  text-decoration: line-through;
}
</style>
