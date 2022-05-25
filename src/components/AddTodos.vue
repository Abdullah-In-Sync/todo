<template>
  <form @submit.prevent="onSubmit()" class="max-w-sm mx-auto my-5 bg-[#d2dae6] px-5 py-4 rounded overflow-hidden shadow-2xl">
    <div>
      <h1 class="text-xl font-extrabold">My Todos</h1>
      <p class="ptag">
        A list of things that one wants to get done or that need to get done 😃 
      </p>
      <label
        for="base-input"
        class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >Title</label
      >
      <input
        type="text"
        placeholder="Todos Title..."
        v-model="title"
        
        @change="todoTextChange"
        id="base-input"
        class="
          bg-gray-50
          border border-gray-300
          text-gray-900 
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          w-full
          flex flex-col
          justify-center
          items-center
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
          text-xl
          font-bold
        "
      />
    </div>
    <div>
      <label
        for="small-input"
        class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >Description</label
      >
      <input
        type="text"
        placeholder="Enter description Here..."
        v-model="desc"
        id="small-input"
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
        "
      />
    </div>
  <button @click.prevent="onSubmit()" class="btn rounded bg-blue-500 hover:bg-blue-800  text-white px-3 py-1 my-2">submit</button>
  </form>
</template>

<script>
// import todos from '@/store/modules/todos';
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      desc: "",
     
    };
  },
  methods: {
    ...mapActions(["postTodos",]),
   
    onSubmit() {
      //   let todos = this.$store.state.todos
      //  let lastId =todos[todos.length - 1].id + 1;
      //  console.log(lastId)
      // let UID = this.$store.state.userUID
      // console.log(UID)
      // this.loginUser(UID)

      this.postTodos({
        // id:lastId,
        title: this.title,
        description: this.desc,
      });
      this.title = "";
      this.desc = "";
    },
  },
};
</script>

<style>
.ptag {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

#base-input,
#small-input {
  max-width: 400px;
  margin: auto;
}
</style>