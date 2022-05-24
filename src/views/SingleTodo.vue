<template>
  <li class="max-w-sm mx-auto my-5 rounded overflow-hidden shadow-lg">
    <span class="text-xl">{{ this.index }}-</span
    ><span v-if="!editing" class="text-2xl font-bold uppercase">{{
      this.todo.title
    }}</span>
    <div>
      <span v-if="!editing" class="text-bg normal-case">{{
        this.todo.description
      }}</span>

      <span v-if="editing">
        <input
          @change="todoTitleChange"
          v-model="todoTitleText"
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
          v-model="todoDescText"
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
          @click="onEditTodo(this.todo)"
          v-if="!editing"
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
          {{ "Edit" }}
        </button>
        <button
          @click="onUpdateTodo"
          v-else
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
          {{ "update" }}
        </button></span
      >

      <span
        ><button
          @click="deleteTodo(this.todo.id)"
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
</template>

<script>


import { mapActions } from "vuex";



export default {
  name: "SingleTodo",
  props: ["todo", "index",],
  data() {
    return {
      editing: false,
      todoDescText: "",
      todoTitleText: "",
      todo1: null,
    };
  },
  methods: {
    ...mapActions(["getTodos", "deleteTodo", "updateTodo"]),
    todoTitleChange(e) {
      this.todoTitleText = e.target.value;
    },
    todoDescChange(e) {
      this.todoDescText = e.target.value;
    },
    onEditTodo() {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.todoDescText = this.todo.description;
        this.todoTitleText = this.todo.title;
      }
    },

    onUpdateTodo() {
      this.editing = this.editing == true ? false : true;
      this.todo1 = {
        id: this.todo.id,
        title: this.todoTitleText,
        description: this.todoDescText,
      };
      this.updateTodo(this.todo1);
    },
   
  },
};

</script>

<style >
</style>