// import {useState} from 'react';

// const App = () => {
//   const [value, setVelue] = useState(0);

//   return(
//     <div>
//       {value}
//       <button type="button" onClick={() => setVelue(value + 1)
//       }>Increment value by 1</button>
//     </div>
//   )
// }

// export default App;

// const App =() =>{
//   const [state, setState] = useState({
//     username: "",
//     todos: [{text: 'Make hw'}],
//     age: 0,
//   })
// }

// const App =() =>{
//   const [username, setUsername] = useState("");
//   const [todos, setTodos] = useState([{text: 'Make hw'}]);
//   const [age, setAge] = useState(0);
// }

// const App = () => {
//   if(isLoggin) {
//     const [username, setUsername] = useState('')
//   }
// }


import {useState, useEffect} from 'react';

const App = () =>{
const [value, setValue] = useState(0);

useEffect(() => {
  document.title = `You clicked ${value} times`;
})

return(
  <div>
    <p>You clicked {value} times</p>
    <button onClick={() => setValue(value + 1)}>Click me</button>
  </div>
)
}

export default App;