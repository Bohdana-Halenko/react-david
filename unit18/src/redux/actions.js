// import { nanoid } from "nanoid";

// export const addTask = text => {
//   return {
//     type: "tasks/addTasks",
//     payload: {
//         id: nanoid(),
//         complated: false,
//         text
//     }
//   };
// };

// export const deleteTask = taskId => {
// return{
//     type: "tasks/deleteTask",
//     payload: taskId
// }}


// // 
// import {useDispatch} from "react-redux";
// const Component = () => {
//         const dispatch = useDispatch();

//         /////
// }


// before
// const addTask = text => {
//   return { type: "tasks/AddTask", payload: text };
//  };
//  console.log(addTask("Learn Redux Toolkit"));
 



import {createAction} from "@reduxjs/toolkit";
const addTask = createAction('tasks/AddTask');
console.log(addTask('Learn Redux Toolkit'));

//type: 'tasks/AddTask', payload: 'Learn Redux Toolkit'