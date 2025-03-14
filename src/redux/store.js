import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import reviewReducer from "./reviewSlice";

const persistConfigCart = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistConfigCart, cartReducer);

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    reviews: reviewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
