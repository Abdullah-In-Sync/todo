<template>
  <AddTodos />
  <div class="todos my-4">
    <ul class="todos-list">
      <SingleTodo v-for="(todo ,index) in allTodos" :index = "index+1" :allTodos="allTodos" :todo="todo" :key="todo.title"></SingleTodo>
    </ul>
  </div>
</template>

<script>
import SingleTodo from './SingleTodo.vue'
import { mapGetters, mapActions } from "vuex";
import AddTodos from "../components/AddTodos.vue";

export default {
  name: "MyTodos",
  components: { AddTodos, SingleTodo },

  methods: {
    ...mapActions(["getTodos"]),
  
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
