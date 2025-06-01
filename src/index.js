import React from 'react';
import ReactDOM from 'react-dom/client';



// const url = "https://content1.rozetka.com.ua/goods/images/big/144249716.jpg";
// const productPrice = 1000;
// const sale = 0.1

// const card = (
// <>
//     <img src={url} alt="Macbook" width="500" />
//     <h2>Macbook</h2>
//     <p>price: {productPrice-(productPrice*sale)}</p>
//     <button type="button">Buy</button>
// </>
// );
// ReactDOM.createRoot(document.getElementById("root")).render(card);

// &&








// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// if -> &&
// const Mail = ({ unrealMessage }) => {
//   return (
//     <div>
//       <h2>Hello</h2>
//       {unrealMessage.length > 0 && (
//         <p>You have message</p>
//       )}
//     </div>
//   )
// }; 


// if...else -> тернарний оператор

// const Mail = ({ username, unrealMessage }) => {
//   return (
//     <div>
//       <h2>Hello</h2>
//       {unrealMessage.length > 0 ? (
//         <p>You have message</p>
//         ) : (<p>You have not message</p>)}
//     </div>
//   )
// }

// const Mail = ({ username, unrealMessage }) => {
//   return (
//     <div>
//       <h2>Hello {username }</h2>
//       <p>
//         {unrealMessage.length > 0
//           ? "You have message"
//           : "You have not message"
//         }
//       </p>
//     </div>
//   );
// };



// const favouriteBooks = [
//  { id: "id-1", name: "JS for beginners" },
//  { id: "id-2", name: "React basics" },
//  { id: "id-3", name: "React Router overview" },
//  { id: "id-4", name: "Redux in depth" },
// ];


// const list = ({ books }) => {
//   return (
//     <ul>
//       {books.map(book => {
//         <li key={book.id}>{ book.name}</li>
//       })}
//     </ul>
//   )
// }


// const favouriteBooks = [
//   { name: "JS for beginners" },
//   { name: "React basics" },
//   { name: "React Router overview" },
//   { name: "Redux in depth" },
// ];
// const list = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book, index) => {
//         <li key={index}>{ book.name}</li>
//       })}
//     </ul>
//   )
// }




// Компоненти
// const Product = props => (
//   <>
//     <img
//       src="https://content1.rozetka.com.ua/goods/images/big/144249716.jpg"
//       alt="Macbook"
//       width="500"
//     />
//     <h2>Macbook</h2>
//     <p>price: 1000</p>
//     <button type="button">Buy</button>
//   </>
// );
// ReactDOM.createRoot(document.getElementById("root")).render(<Product/>);



// const App = () => (
//   <>
//     <h1>Our products</h1>
//     <Product
//             name="Macbook2"
//             img="https://content1.rozetka.com.ua/goods/images/big/144249716.jpg"
//             price={  } />
//   </>
// );

// const Product = ({img, name, price}) => (
//     <div>
//         <h2>{name}</h2>
//         <img src={img } alt={name } />
//         <p>Price: {price }</p>
//         <button type="button">Buy</button>
//     </div>
// )
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);


// значення пропсів за замовчуванням
// const App = () => (
//   <>
//     <h1>Our products</h1>
//     <Product
//             img="https://content1.rozetka.com.ua/goods/images/big/144249716.jpg"/>
//   </>
// );

// const Product = ({img, name='Macbook', price='1000'}) => (
//     <div>
//         <h2>{name}</h2>
//         <img src={img } alt={name } />
//         <p>Price: {price }</p>
//         <button type="button">Buy</button>
//     </div>
// )
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);



// choldren
const Profile = ({ name, email }) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);

const Panel = ({ title, children }) => (
    <section>
        {children}
        <h2>{title}</h2>
        {children}
    </section>
)

const App = () => (
  <div>
    <Panel title="User profile">
      <Profile name="David" email="david@gmail.com" />
      <Profile name="Dana" email="dana@gmail.com" />
    </Panel>
  </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);


//propTypes​ 09.06