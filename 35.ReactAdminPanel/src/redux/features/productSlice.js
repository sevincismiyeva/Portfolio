import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    allproducts: [],
};


const baseUrl = "http://localhost:3000/products";

export const getProducts = createAsyncThunk('products', async () => {
    let { data } = await axios.get(baseUrl);
    return data;
});

export const addProducts = createAsyncThunk('products/add', async (product) => {
    let { data } = await axios.post(baseUrl,product);
    return data;
});

export const deleteProducts = createAsyncThunk('products/delete', async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
});

export const updateProducts = createAsyncThunk('products/update', async (product) => {
    let { data } = await axios.put(`${baseUrl}/${product.id}`,product);
    return data;
});

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.allproducts = action.payload;
        });
        builder.addCase(addProducts.fulfilled, (state, action) => {
            state.allproducts.push(action.payload);
        });
        builder.addCase(deleteProducts.fulfilled, (state, action) => {
            state.allproducts = state.allproducts.filter((product)=>product.id != action.payload);
        });
        builder.addCase(updateProducts.fulfilled, (state, action) => {
            state.allproducts = state.allproducts.map((product) => {
                if (product.id === action.payload.id) {
                    return action.payload;
                }
                return product; 
            });
        });
    },
});

export default productSlice.reducer;

export const { extraReducers } = productSlice.actions;