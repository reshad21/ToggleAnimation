// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useProducts } from '../context/ProductProvider';

const Sidebar = () => {
  const { setShowComponent, showComponent } = useProducts();
  // console.log(showComponent);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };
  return (
    <div className='w-20 min-h-max !rounded-full cs-glass  px-2 py-6 flex flex-col gap-3'>
      <button
        onClick={handleClick}
        className='w-[100%] h-[60px] rounded-md  hover:scale-105 duration-300 hover:shadow-md cursor-pointer'>
        <img src="https://img.icons8.com/?size=512&id=C09BjufvyiCw&format=png" alt="" />
      </button>
      <button className='w-[100%] h-[60px] rounded-md bg-[#cce9ee] hover:scale-105 duration-300 hover:shadow-md cursor-pointer'>
      </button>
      <button className='w-[100%] h-[60px] rounded-md bg-[#cce9ee] hover:scale-105 duration-300 hover:shadow-md cursor-pointer'>
      </button>
      <button className='w-[100%] h-[60px] rounded-md bg-[#cce9ee] hover:scale-105 duration-300 hover:shadow-md cursor-pointer'>
      </button>
      <button className='w-[100%] h-[60px] rounded-md bg-[#cce9ee] hover:scale-105 duration-300 hover:shadow-md cursor-pointer'>
      </button>
      <button className='w-[100%] h-[60px] rounded-md bg-[#cce9ee] hover:scale-105 duration-300 hover:shadow-md cursor-pointer'>
      </button>

    </div>
  )
}

export default Sidebar