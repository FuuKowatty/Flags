import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//components
import App from "./App";

import './index.css'

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
      <App />
  </StrictMode>
);
