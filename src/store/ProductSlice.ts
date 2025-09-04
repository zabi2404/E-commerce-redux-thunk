import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk('products/fetchProducts',
    async ()=>{
       const response = await axios.get('https://fakestoreapi.in/api/products');
       return response.data.products;
    }
)


const productSlice = createSlice({
    name: 'products',
    initialState: {
        item: [],
        status: 'idle',
        error: null as string | null,
    },reducers:{},
extraReducers:(builder)=>{
    builder.addCase(fetchProduct.pending,
        (state)=>{
state.status='loading'
    })
    .addCase(fetchProduct.fulfilled,
    (state,action)=>{
        state.status='Success'
        state.item=action.payload 
    }
    )
    .addCase(fetchProduct.rejected,
        (state,action)=>{
            state.status='failed'
            state.error = action.error.message ?? null
        }
    )
}
});



export default productSlice.reducer