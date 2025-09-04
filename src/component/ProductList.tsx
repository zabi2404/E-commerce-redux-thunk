import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../store/ProductSlice';
import type { AppDispatch } from '../store/store';
import { addtoCart } from '../store/CartSlice';

export default function ProductList() {

  const {item:productList,status,error} = useSelector((state:any)=>state.product)
   useSelector((state:any)=>console.log(state.cart))
const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
   if(status==='idle'){
    dispatch(fetchProduct())
   }

  }, []);

  if(status==='failed')return <p className='flex justify-center'>{error}</p>
  if(status==='loading')return <p className='flex justify-center'>Products is loading....</p>

  return (
    <>
      <div className='flex flex-wrap gap-8 p-8 mx-auto justify-between'>
      {productList.map((item:any,index:number)=>
       <div key={index} className='shadow-2xl max-w-[300px] min-w-[300px]  p-4 rounded-lg flex flex-col justify-center  '>

          <div className='w-[200px] h-[200px] mx-auto'>
            <img src={item?.image} alt="product-img" />
          </div>

          <div>
            <div >
              <p className='mb-4 h-5  truncate'>{item?.title }</p>
              <p>Price: <span className='font-semibold'>{item?.price}$</span>
              </p>
            </div>
            <div className='w-full'>
              <button className='bg-orange-500 py-4 px-6 rounded-md w-full mt-4 hover:opacity-90 cursor-pointer text-white'
              onClick={()=>{dispatch(addtoCart(item))
                
              }}
              >
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      )}
       
      </div>

    </>
  )
}
