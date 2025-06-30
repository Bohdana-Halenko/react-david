// import React from "react";


// const App = () => {
//     return <p style={{
//         color: 'white',
//         backgroundColor: 'gray',
//         borderRadius: 4,
//         padding: '12px 18px',
//         margin: 10
//     }}>Hello!</p>;
// };

// export default App;





// 2
import React from "react";
import { Alert } from './Alert';


const App = () => {
    return (
      <>
        <Alert className="alert warning">Please update your email!</Alert>
        <Alert className="alert error">Error!</Alert>
        <Alert className="alert success">Payment received, thank you!</Alert>
      </>
    );
}

export default App;