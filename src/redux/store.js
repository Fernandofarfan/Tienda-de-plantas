import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import reviewReducer from "./reviewSlice";
import authReducer from "./authSlice";
import wishlistReducer from "./wishlistSlice"; // ⬅️ Agregamos favoritos

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth", "wishlist"], // ⬅️ Persistir favoritos
};

const rootReducer = combineReducers({
  cart: cartReducer,
  reviews: reviewReducer,
  auth: authReducer,
  wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
