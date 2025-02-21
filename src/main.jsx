import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.Fragment>
      <BrowserRouter basename={""}>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </StrictMode>
);
