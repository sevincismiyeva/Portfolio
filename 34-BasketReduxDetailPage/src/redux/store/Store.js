import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import wishlistReducer from "../features/wishlistSlice";
import basketReducer from "../features/basketSlice";
import detailReducer from "../features/detailSlice";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistProductReducer = persistReducer(persistConfig, productReducer);
const persistWishlistReducer = persistReducer(persistConfig, wishlistReducer);
const persistBasketReducer=persistReducer(persistConfig,basketReducer);
const persistDetailReducer=persistReducer(persistConfig,detailReducer);

export const store = configureStore({
  reducer: {
    products: persistProductReducer,
    wishlist: persistWishlistReducer,
    basket:persistBasketReducer,
    detail:persistDetailReducer,
  },
});

export let persistor = persistStore(store);