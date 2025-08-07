// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return 
// }

// export default App;


class Count extends Component{

  static defaultProps ={
    step: 1,
    initialValue: 0,
  }

    state = {
      value:  this.props.initialValue,
  }

  // 

  // render(){
  //   return(
  //     <div>
  //       <p>{this.state.value}</p>
  //     </div>
  //   )
  // }
}
ReactDOM.render(<Count initialValue={10}/>, document.getElementById("root"));
