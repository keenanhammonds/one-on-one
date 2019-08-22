import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "tachyons";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Titillium Web:300,400,700", "sans-serif"]
  }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
