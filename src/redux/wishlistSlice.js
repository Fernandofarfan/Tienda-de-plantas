import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [], // Cargar favoritos guardados
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const item = action.payload;
      const exists = state.favorites.some((fav) => fav.name === item.name);

      if (exists) {
        state.favorites = state.favorites.filter((fav) => fav.name !== item.name);
      } else {
        state.favorites.push(item);
      }

      // Guardar en localStorage después de cada cambio
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite } = wishlistSlice.actions;
export default wishlistSlice.reducer;
