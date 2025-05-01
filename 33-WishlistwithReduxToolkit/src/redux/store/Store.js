import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productSlice } from "../features/productSlice";
import wishlistReducer, { wishlistSlice } from "../features/wishlistSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistProductReducer = persistReducer(persistConfig, productReducer);
const persistWishlistReducer = persistReducer(persistConfig, wishlistReducer);

export const store = configureStore({
  reducer: {
    products: persistProductReducer,
    wishlist: persistWishlistReducer,
  },
});

export let persistor = persistStore(store);