// import {statusFilters} from "./constants";

// const initialState = {
//     tasks: [
//                 { id: 0, text: "Learn HTML and CSS", completed: true },
//                 { id: 1, text: "Get good at JavaScript", completed: true },
//                 { id: 2, text: "Master React", completed: false },
//                 { id: 3, text: "Discover Redux", completed: false },
//                 { id: 4, text: "Build amazing apps", completed: false },
//               ],
//               filters: {
//                 status: statusFilters.all,
//               },
// };

// export const rootReducer = (state = initialState, action) => {
// //     switch(action.type){
    
// //     default:...;
// // return state;
// // }
// }



// import { createReducer } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";
// import { addTask, deleteTask, toggleCompleted } from "./actions";
// const tasksInitialState = [];
// //=============== Before ========================
// // const tasksReducer = (state = tasksInitialState, action) => {
// //  switch (action.type) {
// //    case addTask.type:
// //    // case logic
// //    case deleteTask.type:
// //    // case logic
// //    case toggleCompleted.type:
// //    // case logic
// //    default:
// //      return state;
// //  }
// // };


// // 
// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {},
//   [deleteTask]: (state, action) => {},
//   [toggleCompleted]: (state, action) => {}
// })



// import { createSlice } from "@reduxjs/toolkit";

// const tasksSlice = createSlice({
//  // Ім'я слайсу
//  name: "tasks",
//  // Початковий стан редюсера слайсу
//  initialState: tasksInitialState,
//  // Об'єкт редюсерів
//  reducers: {
//    addTask(state, action) {},
//    deleteTask(state, action) {},
//    toggleCompleted(state, action) {},
//  },
// });

// // Генератори екшенів
// const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// // Редюсер слайсу
// const tasksReducer = tasksSlice.reducer;



//tasks.js
const tasksSlice = {
  name: "tasks",
  initialState: {
    items: [],
    isLoadind: false,
    error: null
  },
  reducers: {
    fetchingProgress(state){
      state.isLoadind = true;
    },
    fetchingSuccess(state, action){
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action){
      state.isLoading = false;
      state.error = action.payload;
    },
  },
};

export const {fetchingProgress, fetchingSuccess, fetchingError} = tasksSlice.actions;



// operations.js

import axios from "axios";

// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// const fetchTasks = () => async dispatch => {
//   try{
//       const response = await axios.get('/tasks')
//   } catch (error){}
// }


// import {createAsyncThunk} from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
// export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
//   const response = await axios.get('/tasks');
//   return response.date;
// }
// )



