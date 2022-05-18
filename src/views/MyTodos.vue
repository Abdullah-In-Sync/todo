<template>
  <AddTodos />
  <div class="todos my-4">
    <ul class="todos-list">
      <SingleTodo v-for="(todo ,index) in allTodos" :index = "index+1" :todo="todo" :key="todo.id"></SingleTodo>
    </ul>
  </div>
</template>

<script>
import SingleTodo from './SingleTodo.vue'
import { mapGetters, mapActions } from "vuex";
import AddTodos from "../components/AddTodos.vue";

export default {
  name: "MyTodos",
  data() {
    return {
      editing: false,
      todoDescText: "",
      todoTitleText: "",
    };
  },
  components: { AddTodos, SingleTodo },

  methods: {
    ...mapActions(["getTodos", "deleteTodo", "updateTodo", "editTodo"]),
    todoTitleChange(e) {
      this.todoTitleText = e.target.value;
    },
    todoDescChange(e) {
      this.todoDescText = e.target.value;
    },

    editTodo(todo) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.todoDescText = todo.description;
        this.todoTitleText = todo.title;
        this.updateTodo(todo);
      } else {
        todo.description = this.todoDescText;
        todo.title = this.todoTitleText;
      }
    },
  },
  computed: mapGetters(["allTodos"]),
  mounted() {
    this.getTodos();
  },
};
</script>
<style scoped>
.todos-list li {
  padding: 10px;
}
</style>
