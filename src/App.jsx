// eslint-disable-next-line no-unused-vars
import React from 'react'
import Options from './components/Child/Options'
import ProductProvider from './context/ProductProvider'
import Root from './layout/Root'

const App = () => {
  return (
    <ProductProvider>
      <div className='bg-[#ecfafc] w-[100%] h-screen flex justify-center items-center'>
        <Root />
        <Options />
      </div>
    </ProductProvider>

  )
}

export default App