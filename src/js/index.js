//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(() => {
counter = counter + 1;
const firstNumber = Math.floor(counter % 10);
const secondNumber = Math.floor((counter / 10) % 10)
const thirdNumber = Math.floor((counter / 100) % 10)
const fourthNumber = Math.floor((counter / 1000) % 10)
const fifth = Math.floor((counter / 10000) % 10)

ReactDOM.render(<Home
    num1={firstNumber}
    num2={secondNumber}
    num3={thirdNumber}
    num4={fourthNumber}
    num5={fifth}
    />, document.querySelector("#app"));
    
}, 2000)