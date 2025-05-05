import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  count: 1,
};

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setDetailProduct: (state, action) => {
      state.product = action.payload;
      state.count = 1; 
    },
    incrementDetailCount: (state) => {
      state.count += 1;
    },
    decrementDetailCount: (state) => {
      if (state.count > 1) {
        state.count -= 1;
      }
    },
  },
});

export const { setDetailProduct, incrementDetailCount, decrementDetailCount } = detailSlice.actions;
export default detailSlice.reducer;
