import axios from "axios"

const state = {
    todos: [],
    userUID: '',
}
const getters = {
    allTodos: state => state.todos
}
const actions = {
    async loginUser({ commit }, userUID) {
        console.log("loginUser====",userUID);
        commit("setUID", userUID)

    },
    async getTodos({ commit,state }) {
        const response = await axios.get(`https://my-todo-app-fdf5a-default-rtdb.firebaseio.com/users/${state.userUID}/todos.json`);
        commit("setTodos", response.data);
        console.log(response, "userUID-", state.userUID);
    },

    async postTodos({ commit,state}, todo) {
        console.log(state)
        console.log("postTodos-",state.userUID)
        const res = await axios.post(`https://my-todo-app-fdf5a-default-rtdb.firebaseio.com/users/${state.userUID}/todos.json`,todo);
        console.log(`https://my-todo-app-fdf5a-default-rtdb.firebaseio.com/${state.userUID}/todos.json`)

        console.log("post todos data:",res);
        commit("newTodo", res.data)
    },
    async postUser({ commit,state }) {
        const res = await axios.post(`https://my-todo-app-fdf5a-default-rtdb.firebaseio.com/users/${state.userUID}.json`);

        commit("newUser", res.data)
        console.log("res.data post User===", res.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`http://localhost:3000/todos/${id}`);

        commit("removeTodo", id);
    },
    async updateTodo({ commit }, todo) {
        commit("editingTodo", todo);
        await axios.put(`http://localhost:3000/todos/${todo.id}`, todo);

    },
    //   async getUID({commit},payload){
    // commit("setUID",payload)
    // console.log(payload)
    //   }


}
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    setUID: (state, payload) => (state.userUID = payload),
    newUser: (state, payload) => {
        state.userUID = payload

    },
    newTodo: (state, todo,res) => {
     console.log("res.data",res.data, todo)
        res.data.push(todo)
    },
    removeTodo: (state, id) => {
        state.todos = state.todos.filter(todo => todo.id !== id)
    },
    editingTodo: (state, todo) => {
        console.log(todo);
        let index = state.todos.findIndex(t => t.id == todo.id)
        // console.log(index);
        state.todos[index] = todo
        //console.log(state.todos)
    },


}



export default {
    state,
    getters,
    actions,
    mutations
}