import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import ThemeProvider from "src/theme/ThemeProvider";
import store from "app/store";
import App from "./App.tsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
