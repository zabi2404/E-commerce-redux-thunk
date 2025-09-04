
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='flex justify-between items-center gap-8 p-4 px-8'>
        <div>
          <h1 className='text-4xl font-black'>
            Shopping <span className='text-orange-500'>Cart</span>
          </h1>
        </div>
        <div className='flex items-center gap-4'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/cart'>
          Cart
        </Link>
        </div>
      </div>
    </>
  )
}
