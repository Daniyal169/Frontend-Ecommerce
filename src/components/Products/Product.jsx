import React from 'react';
import "./Product.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';

function Product() {
    const Products = [
        {
            img: "https://i0.wp.com/www.aspicyperspective.com/wp-content/uploads/2020/05/Best-Hamburger-Patty-Recipe-14.jpg?resize=1132%2C1536&ssl=1",
            title: "Beef Burger",
            prevPrice: "Rs.2500",
            newPrice: "Rs.2200",
        },
        {
            img: "https://groundbeefrecipes.com/wp-content/uploads/how-to-grill-burgers-9.jpg",
            title: "Grilled Beef Burger",
            prevPrice: "Rs.2200",
            newPrice: "Rs.20000",
        },
        {
            img: "https://padibussorah.com/ramadan/wp-content/uploads/2017/03/beef-pepperoni-pizza-600x600.jpg",
            title: "Beef Pepperoni Pizza",
            prevPrice: "Rs.2500",
            newPrice: "Rs.2200",
        },
        {
            img: "https://www.pakistanihealthyrecipes.com/wp-content/uploads/2022/12/Best-Pizza-Places-in-Lahore-1536x1024.jpg",
            title: "MDS Special",
            prevPrice: "Rs.2000",
            newPrice: "Rs.1800",
        },
        {
            img: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/01/grilled-sandwich-1.jpg",
            title: "Veg Grilled Sandwich",
            prevPrice: "Rs 350",
            newPrice: "Rs.300",
        },
        {
            img: "https://www.whiskaffair.com/wp-content/uploads/2020/06/Chicken-Tikka-2-1.jpg",
            title: "Chicken Tikka",
            prevPrice: "Rs.1500",
            newPrice: "Rs.1350",
        },
    ];

    return (
        <div className="products" id='top'>
            <h1 data-aos="slide-right" className='pro-head'>Top Selling</h1>
            <div className="productContainer">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1} // Initially show 1 slide per view
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2, // Show 2 slides per view on small screens
                        },
                        768: {
                            slidesPerView: 3, // Show 3 slides per view on medium screens
                        },
                        1024: {
                            slidesPerView: 4, // Show 4 slides per view on larger screens
                        },
                    }}
                >
                    {Products.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center md:flex-row md:items-stretch relative w-full rounded-md md:h-[250px]">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="z-0 h-40 md:h-full w-full md:w-1/2 rounded-md object-cover"
                                />
                                <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-700 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-left md:relative md:bottom-0 md:left-0 p-4 md:p-6">
                                    <h1 className="text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl">{item.title}</h1>
                                    <p className="mt-2 text-sm text-gray-300 md:text-base">
                                        <del>{item.prevPrice}</del> <span>{item.newPrice}</span>
                                    </p>
                                    <Link to={"/shop"}>
                                        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white md:text-base">
                                            Order Now &rarr;
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Link to={"/shop"}>
                <button className='btn pro-btn' data-aos="slide-up">See All</button>
            </Link>
        </div >
    );
}

export default Product;
