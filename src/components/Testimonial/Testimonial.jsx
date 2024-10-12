import React from 'react'
import "./Testimonial.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

function Testimonial() {
    const testimonials = [
        {
            text: "The atmosphere at MDS Delights is fantastic! The food was bursting with flavor, and the staff was incredibly welcoming. A must-visit for food lovers!",
            name: "Babar M.",
        },
        {
            text: "Had an amazing dining experience at MDS Delights. The dishes were cooked to perfection, and the ambiance was just right. Will definitely return!",
            name: "Ahmed K.",
        },
        {
            text: "MDS Delights offers a delightful mix of flavors and textures. The service was impeccable, and the food was beyond delicious. Highly recommended!",
            name: "Emily R.",
        },
        {
            text: "From appetizers to dessert, every dish at MDS Delights was a masterpiece. The staff made us feel like VIPs. A truly wonderful experience!",
            name: "John D.",
        },
        {
            text: "MDS Delights exceeded all expectations! The food was exquisite, and the service was impeccable. Can't wait to dine here again!",
            name: "Virat A.",
        },
        {
            text: "An unforgettable dining experience at MDS Delights. The food was exceptional, and the service was warm and friendly. Highly recommend this place!",
            name: "Michael T.",
        },
    ];

    return (
        <div className='testimonial'>
            <h1 data-aos="slide-right">Testimonial</h1>
            <div className="testBox" data-aos="fade-in">
                <Swiper
                    modules={[Autoplay]} //
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}

                >
                    {testimonials.map((test, index) => (
                        <SwiperSlide key={index}>
                            <div className="testCont">
                                <p>{test.text}</p>
                                <h3>~{test.name}</h3>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div >
        </div >
    )
}

export default Testimonial