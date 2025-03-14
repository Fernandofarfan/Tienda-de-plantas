import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import cartReducer from "./cartSlice";
import reviewReducer from "./reviewSlice"; // Importamos las reseñas

const store = configureStore({
  reducer: {
    cart: cartReducer,
    reviews: reviewReducer, // Agregamos el reducer de reseñas
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
