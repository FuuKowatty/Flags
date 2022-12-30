import React from "react";
import ReactDOM from "react-dom/client";

//components
import App from "./App";

//context
// import { ThemeProvider } from "./context/ThemeContext";

//styles
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
