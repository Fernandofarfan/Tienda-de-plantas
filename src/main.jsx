// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Añadir esta línea
import App from "./App.jsx";
import "./index.css";
import store, { persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter> {/* Agrega esto aquí */}
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
