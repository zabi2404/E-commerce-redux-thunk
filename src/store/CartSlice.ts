import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [] as any[],

    totalPrice: 0,
   
}


const CartSlice  = createSlice({

name:'cart',
initialState,
reducers:{
    addtoCart(state,action){
        const existingItem = state.item.find((item)=>item.id===action.payload.id)
      
      if(existingItem){
        existingItem.quantity+=1
      }
      else{

          state.item.push({...action.payload ,quantity:1 })
      }
     
         state.totalPrice = state.item.reduce((sum,item)=>
        sum+item.price*item.quantity,0
        )
    },
    removeItem(state,action){
        state.item =  state.item.filter((item)=>item.id !== action.payload)
        
        if(state.item.length==0){
            state.totalPrice=0
        }else{
            state.totalPrice = state.item.reduce((sum,item)=>
                sum+item.price*item.quantity,0
                )
        }
        
    },
    updateQuantity(state,action){
      const item=  state.item.find((item)=>item.id === action.payload.id)
      if(item){

          item.quantity=action.payload.value
      }
      state.totalPrice = state.item.reduce((sum,item)=>
        sum+item.price*item.quantity,0
        )
     
    }
} 
})

export const {addtoCart,removeItem,updateQuantity} = CartSlice.actions;

export default CartSlice.reducer;