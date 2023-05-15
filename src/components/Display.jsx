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
          transition={{ duration: 0.1, ease: "easeInOut" }}


          className={`w-[80%] h-[80%]  mx-auto cs-glass`}>
          <div className={`grid grid-cols-7 gap-y-5 p-4 content-center `}>
            {
              showComponent &&
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=74268&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=eHKMKjewguCH&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=101670&format=png" alt="" />
                </motion.div>

                {/* second row */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto  `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}

                  className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto `}>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=eHKMKjewguCH&format=png" alt="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: '-100vw', y: '100vw' }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}

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