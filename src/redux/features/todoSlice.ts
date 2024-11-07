import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
 title: string,
 description: string,
 isCompleted?: boolean
}

const initialState = { todos: [] as TTodo[] }

const todoSlice = createSlice({
 name: "todos",
 initialState,
 reducers: {
  addTodo: (state, action: PayloadAction<TTodo>) => {
   state.todos.push({ ...action.payload, isCompleted: false })
  }
 }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
