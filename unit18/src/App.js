// ReactDOM.createPortal(child, container);

// const PopupWindow = () => {
//   return ReactDOM.createPortal(
//     <div>Оплата успішна!</div>, document.querySelector('#popup-root')
//     )
// }


import React from 'react';
import { ReactDOM } from 'react-dom';

class MyPortalComponent extends React.Component{
  portalContainer = document.createElement('div');
  componentDidMount(){
  document.body.appendChild(this.portalContainer)
}
  componentWillUnmount(){
    document.body.removeChild(this.portalContainer)
  }

  render(){
    return ReactDOM.createPortal(
      this.props.children,
      this.portalContainer
      )
  }
}

function App(){
  return(
    <div>
      <h1>App Content</h1>
      <MyPortalComponent>
        <div>Content in Portal</div>
      </MyPortalComponent>
    </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'))