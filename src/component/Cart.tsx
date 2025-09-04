import React from 'react'

function Cart() {
  return (
    <>
    <div className='max-w-[1100px] shadow-2xl mx-auto p-4'>
<div>
<div>
  <h1 className='text-2xl font-black text-orange-500 mb-4'>Your Cart</h1>
</div>

      <div className='flex my-4'>

        <div>
          <img src="" alt="product-image" 
         
          />
        </div>

        <div>
          <div>
          <h1>IMAGE TITLE</h1>
          <p>Price</p>
          </div>
          <div>
            <input type="number" 
             className='border rounded-sm'
            />
            <div className='flex gap-4'>
              <button className='bg-orange-500 py-2 px-6 rounded-md w-fit mt-4 text-white'>
                Update
              </button>
              <button className='bg-orange-500 py-2 px-6 rounded-md w-fit mt-4 text-white'>
                Remove
              </button>
            </div>
          </div>
        </div>

      </div>


      <div className='flex flex-col border-t pt-4'>
        <div>
          <p className='flex justify-end text-[18px] font-semibold'>Total: 200$</p>
        </div>
        <div className='w-full'>
        <button className='bg-orange-500 py-4 px-6 rounded-md w-full mt-4 text-white cursor-pointer hover:opacity-90'>
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