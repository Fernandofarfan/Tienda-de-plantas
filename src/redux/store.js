import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Almacenamiento en localStorage
import cartReducer from "./cartSlice";
import reviewReducer from "./reviewSlice";
import authReducer from "./authSlice"; // Si manejas autenticación con Redux

// Configuración de persistencia para el carrito
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"], // Lista de reducers que queremos persistir
};

// Combinamos reducers para poder manejar múltiples persistencias
const rootReducer = combineReducers({
  cart: cartReducer,
  reviews: reviewReducer,
  auth: authReducer, // Si tienes autenticación con Redux
});

// Creamos el reducer persistido
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuración de la store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Deshabilitar warning de serialización
    }),
});

// Persistor para mantener la sesión
export const persistor = persistStore(store);
export default store;
