import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "src/theme/ThemeProvider";
import App from "./App.tsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
