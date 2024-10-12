import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import Category from '../components/Category/Category'
import Service from '../components/Services/Service'
import SlideText from '../components/SlideText/SlideText'
import Product from '../components/Products/Product'
import Testimonial from '../components/Testimonial/Testimonial'
import Footer from '../components/Footer/Footer'

function HomePage() {
    return (
        <>
            <Home />
            <Category />
            <Service />
            <SlideText />
            <Product />
            <Testimonial />
        </>
    )
}

export default HomePage