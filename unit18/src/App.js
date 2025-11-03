// function App() {
//   return
// }

// export default App;

// import React, { createContext, useContext, useState } from "react";
// const UserContext = createContext();
// const useUser = () => useContext(UserContext);

// function UserProvider({children}){
//   const [isLog, setIsLog] = useState(false);
//   const [username, setUsername] = useState(null);

//   const logIn = () =>{
//     setIsLog(true);
//     setUsername("David")
//   }

//   const logOut = () =>{
//     setIsLog(false);
//     setUsername(null)
//   }

//   return(
//     <UserContext.Provider value={{isLog, logIn, username, logOut}}>
//       {children}
//     </UserContext.Provider>
//   )
// }

// function UserMenu() {
//   const { isLog, username, logIn, logOut } = useUser();
//   return (
//     <div>
//       {isLog && <p>{username}</p>}
//       {isLog ? (
//         <button onClick = {logOut}>Log out</button>
//       ) : (
//         <button onClick = {logIn}>Log in</button>
//       )}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     < UserProvider>
//       <div>
//         <h1>useContext hook</h1>
//         <UserMenu />
//       </div>
//     </ UserProvider>
//   );
// }





// useRef

// import {useRef} from "react";

// const App = () =>{
//   const btnRef = useRef();

//   return <button ref={btnRef}>Button with ref</button>
// }


// import {useEffect, useRef, useState} from "react";

// const App = () => {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   console.log(btnRef.current);

//   useEffect(() =>{
//     console.log(btnRef.current)
//   })

//   const handleClick = () => {
//     console.log(btnRef.current)
//   }

//   return(
//     <>
//       <button onClick = {() => setValue(value+1)}>Update value - re-render</button>
//       <button ref={btnRef}>Button with ref</button>
//     </>
//   )
// }

// export default App;


// const App = () =>{
//   const valueRef = useRef(0);

//   useEffect(() => {
//     console.log(valueRef.current);
//   })

//   const handleClick = () => {
//     valueRef.current += 1;
//   }

//   return <button onClick = {handleClick}>Click</button>
// };

// export default App;


// import { useRef } from "react";

// const Player = ({source}) => {
//   const playerRef = useRef(null);
//   const play = () => playerRef.current.play();
//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video ref={playerRef} src={source}>Sorry, we have a problem</video>
//       <div>
//         <button onClick = {play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   )
// }

// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
// }

// export default App;






// useMemo

// const memoValue = React.useMemo(() => computeExpensiveValue(a,b), [a, b])

// import {useState, useMemo} from 'react';

// const App = ({someProp}) => {
//   const [planets, setPlanets] = useState(['Earth', "Mars", "Venus", "Jupiter"]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);


//   const filteredPlanets = useMemo(()=>planets.filter(planet => planet.includes(query)), [planets, query])

//   return(
//     <div>
//       <div>Some props: {someProp}</div>
//       <button onClick ={()=>setClicks(clicks+1)}>Numbers of click: {clicks}</button>
//       <div>
//       {filteredPlanets.map(planet => (
//         <div key={planet}>{planet}</div>
//       ))}
//     </div>
//     </div>
    
//   )
// }

// export default App;


// useMemo, useCallback практика (п.3)
import React, {useState, useMemo, useCallback} from 'react;'

function App(){
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('');
}

export default App;