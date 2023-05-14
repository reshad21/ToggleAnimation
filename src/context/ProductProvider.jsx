// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

const PRODUCT_CONTEXT = createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {

    const [showComponent, setShowComponent] = useState(false);

    const value = {
        setShowComponent, showComponent
    }

    return (
        <PRODUCT_CONTEXT.Provider value={value}>{children}</PRODUCT_CONTEXT.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}


export default ProductProvider;