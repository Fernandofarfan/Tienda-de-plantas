import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: {},
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action) => {
      const { productId, rating, comment } = action.payload;
      if (!state.reviews[productId]) {
        state.reviews[productId] = [];
      }
      state.reviews[productId].push({ rating, comment });
    },
  },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
