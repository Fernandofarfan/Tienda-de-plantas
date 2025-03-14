import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer, // 🔹 Asegúrate de que está correctamente importado
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
