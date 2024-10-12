import React, { useState } from 'react';
import { useShop } from '../../Context/ShopContext';
import FilterButton from '../FilterButton';
import "./ShopFilter.css";

function ShopFilter() {
    const { result } = useShop();
    const [showFilters, setShowFilters] = useState(false);



    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-2 py-10 lg:px-10">
                {/* Top */}
                <div className="md:flex md:flex-row md:items-start md:justify-between">
                    <div>
                        <h1 className="text-5xl font-bold text-hoverColor">Products</h1>
                    </div>
                </div>
                <hr className="my-8" />

                <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
                    {/* Filter Section */}
                    <div className="lg:col-span-3">
                        {/* Button to toggle filters on small screens */}
                        <div className="lg:hidden">
                            <button
                                className="w-full bg-hoverColor text-white py-2"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                Toggle Filters
                            </button>
                        </div>
                        {/* Filters */}
                        <div className={`space-y-6 divide-y ${showFilters ? 'block' : 'hidden'} lg:block`}>
                            <div key={Math.random()} className="pt-6">
                                <h3 className="text-2xl lg:text-5xl font-semibold text-hoverColor">Category</h3>
                                <div className="FilterBtns">
                                    <FilterButton value="" title="All " />
                                    <FilterButton value="burger" title="Burger" />
                                    <FilterButton value="pizza" title="Pizza" />
                                    <FilterButton value="bbq" title="BBQ" />
                                    <FilterButton value="sandwich" title="Sandwich" />
                                    <FilterButton value="drinks" title="Drinks" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className="h-[400px] w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
                        {result}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopFilter;
