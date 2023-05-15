// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useProducts } from '../context/ProductProvider';
import './Display.css';

const Display = () => {
  const { showComponent } = useProducts();

  return (
    <>
      {
        showComponent &&
        <motion.div
          initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 0.1 }}

          className={`w-[80%] h-[80%]  mx-auto cs-glass`}>
          <div className={`grid grid-cols-7 gap-y-5 p-4 content-center `}>
            {
              showComponent &&
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.2 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.4 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=74268&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 1 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 1.2 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=eHKMKjewguCH&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 1.4 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=101670&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 1.6 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 1.8 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 2 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 2.2 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=eHKMKjewguCH&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 2.4 }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=101670&format=png" alt="" />
                </motion.div>
              </>
            }
          </div>
        </motion.div>

      }
    </>


  )
}

export default Display