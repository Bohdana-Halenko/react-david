
// import './App.css';

// function App() {
//   return 
// }

// export default App;

// 1
// import React, { Component } from 'react';

// class MyComponent extends Component{
//     static defaultProps = {};

//     static propTypes = {};

//     render() {
//         return <div>Class Component</div>
//     }
// }

// export default MyComponent;


// 2
// import React, { Component } from "react";
// import PropTypes from "prop-types";

// class MyComponent extends Component {
//   static defaultProps = {
//     title: "Class Component",
//   };

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//     };
    
//     render() {
//         return (
//             <div>{ this.props.title }</div>
//         )
//     }
// }

// export default MyComponent;



import React, { Component } from 'react';

class App extends Component {
  static defaultProps = {
      step: 1,
      
  };

  constructor() {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleInc = () => {
    this.setState((prevState) => ({
      value: prevState.value + this.props.step,
    }));
  };

  handleDec = () => {
    this.setState((prevState) => ({
      value: prevState.value - this.props.step,
    }));
  };
    н
    
    render() {
        const { step } = this.props;
        const { value } = this.state;

        return (
          <div>
            <h2>Лічильник</h2>
            <p>Поточне значення: {value}</p>
            <button onClick = {this.handleDec}>- {step}</button>
            <button onClick = {this.handleInc}>+ {step}</button>
          </div>
        );
    }
}

export default App; 