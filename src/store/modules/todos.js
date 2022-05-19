import axios from "axios"

const state = { 
    todos : []
}
const getters = {
    allTodos : state => state.todos
}
const actions = {
async getTodos({commit}){
    const response = await axios.get("http://localhost:3000/todos");
    commit("setTodos",response.data);
},
async postTodos({commit},todo){
    const res = await axios.post("http://localhost:3000/todos",todo);
    commit("newTodo",res.data)
},
async deleteTodo({ commit }, id) {
    await axios.delete(`http://localhost:3000/todos/${id}`);

    commit("removeTodo", id);
  },
async updateTodo({ commit }, todo) {
    commit("editingTodo", todo);
    await axios.put(`http://localhost:3000/todos/${todo.id}`,todo);

  },


}
const mutations = {
setTodos:(state,todos)=>(state.todos=todos),
newTodo:(state,todo)=>(state.todos.push(todo)),
removeTodo: (state, id) =>{
    state.todos = state.todos.filter(todo => todo.id !== id)
},
editingTodo:(state,todo)=>{
    console.log(todo);
    let index = state.todos.findIndex(t=>t.id==todo.id)
    // console.log(index);
    // if(index!= -1){
    //     state.todos[index] = id
    // }
console.log(index);
    state.todos = state.todos.map(todo => {
        if (todo.id === todo.id) {
            state.todos[index] = todo
            console.log(todo);
        }
    });

}


}



export default {
state,
getters,
actions,
mutations
}