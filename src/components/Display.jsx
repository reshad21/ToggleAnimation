// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useProducts } from '../context/ProductProvider';
import './Display.css';

const Display = () => {
  const { showComponent } = useProducts();

  return (
    <div className={`w-[80%] h-[80%]  mx-auto ${showComponent ? 'display cs-glass' : 'hide cs-glass'}`}>
      <div className={`grid grid-cols-7 gap-y-5 p-4 content-center `}>
        {
          // showComponent &&
          <>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
            </div>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=74268&format=png" alt="" />
            </div>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
            </div>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
            </div>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
            </div>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=eHKMKjewguCH&format=png" alt="" />
            </div>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=101670&format=png" alt="" />
            </div>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
            </div>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
            </div>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
            </div>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=eHKMKjewguCH&format=png" alt="" />
            </div>
            <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  ${showComponent ? 'itemShow' : 'itemHide'} `}>
              <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=101670&format=png" alt="" />
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Display