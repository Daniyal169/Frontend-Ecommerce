import React from 'react'
import { useShop } from '../../Context/ShopContext'


function ShopProduct({ id, img, title, newPrice, prevPrice }) {
    const { addCart, cartItems } = useShop();

    const cartAmount = cartItems[id]


    return (
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1  px-4 py-10 ">
            <div className="rounded-lg border shadow-md overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-[200px] object-cover"
                />
                <div className="p-6">
                    <h1 className="text-lg font-semibold mb-2">{title}</h1>
                    <div className="flex items-center justify-between">
                        <del className="text-sm text-gray-500">
                            {prevPrice}
                        </del>
                        <span className="text-lg font-bold text-black">{newPrice}</span>
                    </div>
                    <button
                        type="button"
                        className="mt-4 w-full rounded-md bg-hoverColor px-4 py-2 text-white font-semibold hover:bg-white hover:text-hoverColor  transition-colors duration-200"
                        onClick={() => addCart(id)}
                    >
                        Add to Cart {cartAmount > 0 && <>({cartAmount})</>}
                    </button>
                </div>
            </div>
        </div>


    )
}

export default ShopProduct