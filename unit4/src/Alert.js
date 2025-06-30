import React from 'react';
import css from './Alert.module.css';

export const Alert = ({ children }) => {
    return <p className={css.alert}>{children}</p>;
}



// const alertStyle = {
//   color: "white",
//   borderRadius: 4,
//   padding: "12px 18px",
//   margin: 10,
// };

// const getColor = variant => {
//     switch (variant) {
//         case "info":
//             return "skyblue";
//         case 'success':
//             return "green";
//         case 'warning':
//             return 'orange';
//         case "error":
//             return 'red';
//         default:
//             throw new Error(`Prop: ${variant}`)
//     }
// }

// export const Alert = ({children, variant}) => {
//     return <p style={{...alertStyle, backgroundColor: getColor(variant)}}>{ children }</p>
// }