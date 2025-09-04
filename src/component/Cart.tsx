import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeItem, updateQuantity } from '../store/CartSlice';

function Cart() {

  const {item:CartItem,tempItem,totalPrice} = useSelector((state:any)=>state.cart)
  
  const dispatch  = useDispatch();
  const navigate = useNavigate();

const RemoveItemHandler = (id:number)=>{
dispatch(removeItem(id))
}

const HandleQuantityChange = (value:number,id:number) => {

console.log(value,id)
dispatch(updateQuantity({value,id}))

};



  return (
    <>
    <div className='max-w-[1100px] shadow-2xl mx-auto p-4'>
<div>
<div>
  <h1 className='text-2xl font-black text-orange-500 mb-4'>Your Cart</h1>
</div>
{CartItem.map((item:any,)=>

      <div key={item.id} className='flex my-4'>

        <div >
          <img src={item.image} alt="product-image" 
         className='max-w-40 min-w-40'
          />
        </div>

        <div>
          <div>
          <h1>{item.title}</h1>
          <p>{item.price}$</p>
          </div>
          <div>
            <input type="number" 
             className='border rounded-sm'
           min={1}
             value={item?.quantity}
             onChange={(e)=>{
              HandleQuantityChange(parseInt(e.target.value), item.id)
             }}
            />
            <div className=''>
             
              <button className='bg-orange-500 py-2 px-6 rounded-md w-fit mt-2 text-white cursor-pointer'
              onClick={()=>{
                RemoveItemHandler(item.id)
              }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>

      </div>
)
}
{CartItem.length===0 && <p className='flex justify-center items-center text-2xl opacity-50'>No Item Added in Cart</p>}

      <div className='flex flex-col border-t pt-4'>
        <div>
          <p className='flex justify-end text-[18px] font-semibold'>Total: {totalPrice}$</p>
        </div>
        <div className='w-full'>
        <button className='bg-orange-500 py-4 px-6 rounded-md w-full mt-4 text-white cursor-pointer hover:opacity-90'
        onClick={()=>{
          navigate('/')
        }}
        >
      Back to Shopping
        </button>
      </div>
      </div>
</div>

    </div>
    </>
  )
}

export default Cart