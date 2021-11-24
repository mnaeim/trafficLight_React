//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Light from "./component/Light.jsx";

//render your react application
ReactDOM.render(<Light />, document.querySelector("#app"));
