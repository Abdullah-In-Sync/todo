<template>
  <li class="max-w-sm mx-auto my-5 rounded overflow-hidden shadow-lg">
    <span class="text-xl">{{ props.index}}-</span
    ><span v-if="!editing" class="text-2xl font-bold uppercase">{{
      props.todo.title
    }}</span>
    <div>
      <span v-if="!editing" class="text-bg normal-case">{{
        props.todo.description
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
          @click="onEditTodo(props.todo)"
          v-if="!(editing)"
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
          {{"update" }}
        </button></span
      >

      <span
        ><button
          @click="deleteTodo(props.todo.id)"
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

<script setup>
//import store from "@/store";
import { defineProps, ref } from "vue";
import { useStore } from 'vuex'
//const emit = defineEmits(["editTodo", "submit"]);
const store = useStore()
const props = defineProps(['todo', 'index']);

let editing = ref(false);
let todoDescText = ref(""); 
let todoTitleText = ref("");
const onEditTodo = () => {
      editing.value = editing.value == true ? false : true;
      if (editing.value) {
        todoDescText.value = props.todo.description
        todoTitleText.value = props.todo.title
      }
}

const onUpdateTodo = () =>{
  editing.value = editing.value == true ? false : true;
  let todo1 = {
          id: props.todo.id,
          title: todoTitleText.value,
          description: todoDescText.value
        }
         store.dispatch('updateTodo', todo1)
}
const deleteTodo = (id) => {
store.dispatch('deleteTodo', id)
}


</script>

<style setup>
</style>