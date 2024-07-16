// React Library
import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./styles/reset.css";
import "./styles/layout.css";

// Output css
import "./styles/index.css";

// App component
import App from "./App";

// React Router
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
