import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            const countToAdd = action.payload.count || 1; 
            const existProduct = state.products.find(
              (product) => product.id === action.payload.id
            );
          
            if (!existProduct) {
              state.products.push({ ...action.payload, count: countToAdd });
            } else {
              existProduct.count += countToAdd;
            }
        },
        allBasketDelete: (state) => {
            state.products = [];
        },
        removeBasket: (state, action) => {
            state.products = state.products.filter((item) => item.id != action.payload)
        },
        increment: (state, action) => {
            let findProduct = state.products.find((product) => product.id == action.payload);

            if (findProduct) {
                findProduct.count++;
            }
        },
        decrement: (state, action) => {
            let findProduct = state.products.find((product) => product.id == action.payload);

            if (findProduct) {
                findProduct.count--;
            }
        },
    },
})

export default basketSlice.reducer

export const { addBasket, allBasketDelete, removeBasket, increment, decrement } = basketSlice.actions