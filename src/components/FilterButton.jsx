import React from 'react'
import { useShop } from '../Context/ShopContext'

function FilterButton({ value, title }) {
    const { handleButton } = useShop();
    const handleClick = (e) => {
        handleButton(e);
    };
    return (
        <>

            <button className='filterBtn' value={value} onClick={handleClick}>{title}</button>

        </>
    )
}

export default FilterButton