import React, { useEffect, useState } from 'react'
import Data from '../../Data/Data'
import { useShop } from '../../Context/ShopContext'
import CartItems from './CartItems';
import { Link } from "react-router-dom"

function Cart() {

    const { cartItems, totalQuantity } = useShop();

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const calculateTotalAmount = () => {
            let total = 0;
            for (let id in cartItems) {
                const quantity = cartItems[id];
                let product;
                for (let i = 0; i < Data.length; i++) {
                    if (Data[i].id === Number(id)) {
                        product = Data[i];
                        break;
                    }
                }
                if (product) {
                    total += quantity * Number(product.newPrice);
                }
            }

            setTotalAmount(total);
        };

        calculateTotalAmount();
    }, [cartItems]);

    return (
        <div className="mx-auto max-w-7xl px-2 lg:px-10 border-b-black border-b-2">
            <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Shopping Cart
                </h1>
                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>
                        <ul role="list" className="divide-y divide-gray-200">
                            {Data.map((product) => {
                                if (cartItems[product.id] !== 0) {
                                    return <CartItems data={product} />;
                                }
                                return null;
                            })}
                        </ul>
                    </section>
                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                    >
                        <h2
                            id="summary-heading"
                            className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                        >
                            Price Details
                        </h2>
                        <div>
                            <dl className=" space-y-1 px-2 py-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-800">Total Items </dt>
                                    <dd className="text-sm font-medium text-gray-900">{totalQuantity}</dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-800">Total Price</dt>
                                    <dd className="text-sm font-medium text-gray-900">Rs {totalAmount}</dd>
                                </div>

                                <div className="flex items-center justify-between py-4">
                                    <dt className="flex text-sm text-gray-800">
                                        <span>Delivery Charges</span>
                                    </dt>
                                    <dd className="text-sm font-medium text-green-700">Free</dd>
                                </div>
                                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                    <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                    <dd className="text-base font-medium text-gray-900">Rs {totalAmount}</dd>
                                </div>
                            </dl>

                            <div className="flex justify-end space-x-4 pb-4 pr-2">
                                <Link to={"/shop"}>
                                    <button
                                        type="button"
                                        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Back to shop
                                    </button>
                                </Link>
                                <Link to={"/contact"}>
                                    <button
                                        type="button"
                                        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default Cart