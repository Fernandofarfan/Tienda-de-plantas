import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./context/AuthContext"; // 👈 Importa el AuthProvider
import App from "./App";
import store, { persistor } from "./redux/store";
import "./index.css"; // Asegúrate de que el CSS está importado correctamente

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider> {/* 👈 Envuelve toda la App */}
          <HashRouter>
            <App />
          </HashRouter>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
