import React from 'react'
import "./ShopHome.css"

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShop } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

function ShopHome() {
    const { input, handleInput } = useShop();
    const handleClick = (e) => {
        handleInput(e);
    }
    const { totalQuantity } = useShop()
    console.log(totalQuantity)

    return (
        <div className="shopHome">
            <div className="shopContainer">
                <div className="shopInput">
                    <input type="text" placeholder="Search Your Product Here" onChange={handleClick} value={input} />
                    <Link to={"/cart"}>
                        <button type="submit" className="search-btn"><AiOutlineShoppingCart className="search" />
                            {totalQuantity}
                        </button>
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default ShopHome