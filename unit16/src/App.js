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


// import {useState, useEffect} from 'react';

// const App = () =>{
// const [value, setValue] = useState(0);

// useEffect(() => {
//   document.title = `You clicked ${value} times`;
// })

// return(
//   <div>
//     <p>You clicked {value} times</p>
//     <button onClick={() => setValue(value + 1)}>Click me</button>
//   </div>
// )
// }

// export default App;


// import {useState, useEffect} from 'react';

// const App =()=>{
//   const [value, setValue] = useState(0);

//   useEffect(()=>{
//     console.log(value);
//     console.log('Updating phase')
//   }, [value]);

//   return <button onClick={()=> setValue(value+1)}>{value}</button>
// }

// export default App;




// import {useState, useEffect} from 'react';

// const App =()=>{
// const [firstValue, setFirstValue] = useState(0);
// const [secondValue, setSecondValue] = useState(0);

// useEffect(()=>{
//   console.log(firstValue + secondValue);
// }, [firstValue, secondValue]);

// return(
//   <>
//   <button onClick={() => setFirstValue(firstValue + 1)}>First: {firstValue}</button>
//   <button onClick={() => setSecondValue(secondValue + 1)}>Second: {secondValue}</button>
//   </>
// )
// }


// export default App;


// import {useState, useEffect} from 'react';

// const App =()=>{
// useEffect(()=>{
//   console.log("mounting");

//   return ()=>{
//     console.log('unmounting')
//   }
// }, []);

// return null;
// }


// export default App;



// import {useState, useEffect} from 'react';

// const App =({username})=>{
// const [isLog, setIsLog] = useState(false);
// const [value, setValue] = useState('');

// useEffect(()=>{
//   console.log("First message")
// }, []);

// useEffect(()=>{
//   if(username){
//     console.log('Fetching user: ', username)
//   }
// }, [username]);

// useEffect(()=>{
//   console.log("Value changed: ", value)
// }, [value]);

// useEffect(()=>{
//   console.log("isLog changed: ", isLog)
// }, [isLog]);

// useEffect(()=>{
//   const handleKeyDown = e => console.log('keydown event: ', e.key);
//   document.addEventListener('keydown', handleKeyDown);

//   return () => {
//     document.removeEventListener('keydown', handleKeyDown)
//   }
// }, []);


// return(
//   <div>
//     <h1>Hello {username}</h1>
//     <p>Value: {value}</p>
//     <input type="text" value = {value} onChange={e => setValue(e.target.value)}/>
//     <p>Status: {isLog ? "Logged in" : "Logged out"}</p>
//     <button onClick={()=>setIsLog(prev => !prev)}>Toggle Login</button>
//   </div>
// )
// }


// export default App;