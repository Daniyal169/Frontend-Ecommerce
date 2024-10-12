import { createContext, useContext } from "react";


export const ShopContext = createContext({
    input: "",
    result: "",
    handleInput: () => { },
    handleButton: () => { },

    // for cart
    addCart: () => { },
    removeCart: () => { },
    cartItems: 0,
    totalQuantity: 0,
})

export const useShop = () => {
    return useContext(ShopContext)
}

export const ContextProvider = ShopContext.Provider;