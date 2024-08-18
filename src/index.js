import React from "react";
import App from "./App";
import "./index.css"; //?    Webpack injects imported CSS in our application, it is also responsible for including images that are in public folder
//?   It is a convention to put images in public folder
//?   We can't import anything from public folder in CRA (not even if we specify the correct path)

//?     React v18
import ReactDOM from "react-dom/client";

// ReactDOM.createRoot(document.getElementsByClassName("root")[0]).render(
//   <h1>My Project!</h1>
// );

ReactDOM.createRoot(document.getElementsByClassName("root")[0]).render(
  /**
   * !    STRICT MODE -->
   *    1)  During development, it renders every component twice in order to find certain bugs.
   *
   *    2)  It checks we are using outdated parts of React API.
   *
   */

  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//?     Before React v18
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <h1>Hello, v18!!!</h1>,
//   document.getElementsByClassName("root")[0]
// );
