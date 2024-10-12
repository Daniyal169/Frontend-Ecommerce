import React from 'react'
import { useShop } from '../../Context/ShopContext'

function CartItems({ data }) {
    const { img, id, title, newPrice, prevPrice } = data
    const { cartItems, addCart, removeCart } = useShop()

    return (
        <div key={id} className="">
            <li className="flex py-6 sm:py-6 ">
                <div className="flex-shrink-0">
                    <img
                        src={img}
                        alt={title}
                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                    />
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                            <div className="flex justify-between">
                                <h3 className="text-sm">
                                    <a className="font-semibold text-black">
                                        {title}
                                    </a>
                                </h3>
                            </div>

                            <div className="mt-1 flex items-end">
                                <p className="text-xs font-medium text-gray-500 line-through">
                                    {prevPrice}
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    {newPrice}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <div className="mb-2 flex">
                <div className="min-w-24 flex">
                    <button type="button" className="h-7 w-7" onClick={() => removeCart(id)}>
                        -
                    </button>
                    <input
                        type="text"
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        defaultValue={1}
                        value={cartItems[id]}
                    />
                    <button type="button" className="flex h-7 w-7 items-center justify-center" onClick={() => addCart(id)}>
                        +
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CartItems