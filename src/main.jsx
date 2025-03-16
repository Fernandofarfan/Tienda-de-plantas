import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "./context/ThemeContext";  // ⬅️ Nuevo contexto de tema
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import store, { persistor } from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ThemeProvider>  {/* ⬅️ Envuelve la app para gestionar el tema */}
            <HashRouter>
              <App />
            </HashRouter>
          </ThemeProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
