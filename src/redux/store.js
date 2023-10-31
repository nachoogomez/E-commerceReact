import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';

import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';
import recommendedReducer from './recomended/recomendedSlice';
import cartReducer from './cart/cartSlice';
import burgueReducer from "./burgerNav/burguerSlice";
import useReducer from "./user/userSlice";
import ordersReducer from "./orders/orderSlice";


const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    recommended: recommendedReducer,
    cart: cartReducer,
    burguer: burgueReducer,
    user: useReducer,
    orders: ordersReducer,
})

const persistConfig  = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user'],
}

const persistedReducer = persistReducer (persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (gerDefaultMiddleware) => gerDefaultMiddleware({
        serializableCheck: false,
    })
});

export const persistor = persistStore(store);