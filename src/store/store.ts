import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductSlice'
import CartReducer from './CartSlice'
export const store = configureStore({
    reducer:{
        product:ProductReducer,
        cart:CartReducer
    }
})