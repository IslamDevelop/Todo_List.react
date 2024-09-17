import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: JSON.parse(localStorage.getItem("Todo")) || []
    },
    reducers: {
        Todo(state, action) {
            let option = {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              };
              state.todos.push({
                  id: Date.now(),
                  text: action.payload,
                  date: Intl.DateTimeFormat("ru-Us", option).format(),
                  done: false
                })
                
        },
        deleteTodo(state, action) {
            console.log(action.payload)
          state.todos = state.todos.filter(item => item.id !== action.payload)
        },
        todoComplete(state, action) {

            
           state.todos.map((todo) =>
                todo.id === action.payload ? todo.done = !todo.done : todo.done)
    }
}})

export const {Todo,deleteTodo,todoComplete} = todoSlice.actions;
export default todoSlice.reducer;