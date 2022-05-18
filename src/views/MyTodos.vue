<template>
  <AddTodos />
  <div class="todos my-4">
    <ul class="todos-list">
      <li
        v-for="todo in allTodos"
        :key="todo.id"
        class="max-w-sm mx-auto my-5 rounded overflow-hidden shadow-lg"
      >
        <span class="text-xl">{{ todo.id }}-</span
        ><span v-if="!editing" class="text-2xl font-bold uppercase">{{
          todo.title
        }}</span>
        <div>
          <span v-if="!editing" class="text-bg normal-case">{{
            todo.description
          }}</span>

          <span v-if="editing">
            <input
              @change="todoTitleChange"
              :value="todoTitleText"
              type="text"
              class="
                block
                w-full
                p-2
                text-gray-900
                border border-gray-300
                rounded-lg
                bg-gray-50
                sm:text-xs
                focus:ring-blue-500 focus:border-blue-500
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
                text-2xl
                font-bold
              "
            />
          </span>

          <span v-if="editing">
            <input
              @change="todoDescChange"
              :value="todoDescText"
              type="text"
              class="
                block
                w-full
                p-2
                text-gray-900
                border border-gray-300
                rounded-lg
                bg-gray-50
                sm:text-xs
                focus:ring-blue-500 focus:border-blue-500
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
                text-xl
                font-medium
              "
            />
          </span>

          <span
            ><button
              @click="editTodo(todo)"
              class="
                inline-block
                px-6
                py-2
                ml-3
                border-2 border-gray-800
                text-gray-800
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                hover:bg-black hover:bg-opacity-5
                focus:outline-none focus:ring-0
                transition
                duration-150
                ease-in-out
              "
            >
              {{ editing ? "update" : "Edit" }}
            </button></span
          >

          <span
            ><button
              @click="deleteTodo(todo.id)"
              class="
                btn
                bg-red-500
                hover:bg-red-700
                text-white
                rounded
                px-4
                py-1
                mx-5
              "
            >
              Delete
            </button></span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
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
  components: { AddTodos },

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
