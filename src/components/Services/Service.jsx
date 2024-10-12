import React from 'react'
import "./Service.css"
import Card from '../Card'
import Img1 from "../../asserts/img.png.png"
import Img3 from "../../asserts/img2.png.png"
import Img2 from "../../asserts/img3.png.png"
import { Link } from 'react-router-dom'


function Service() {
    return (
        <div className="services" id='service'>
            <div className="ser-left">
                <h1 data-aos="slide-right">Our Services</h1>
                <p>Discover our exquisite menu and exceptional dining experience<br /> Designed to delight your taste buds and make every meal memorable </p>
                <Link to={"/shop"}>
                    <button className="ser-btn ">Book Now</button>
                </Link>
            </div>

            <div className="ser-right" data-aos="fade-in" >
                <div className='cardOne'  >
                    <Card
                        image={Img1}
                        heading={"Dining"}
                        detail={"Experience our gourmet dishes crafted with the finest ingredients in a cozy, inviting atmosphere."}
                    />
                </div>
                <div className='cardTwo'>
                    <Card
                        image={Img2}
                        heading={"Delivery"}
                        detail={"Enjoy our delicious meals delivered straight to your door with fast and reliable service."}
                    />
                </div>
                <div className='cardThree'>
                    <Card
                        image={Img3}
                        heading={"Catering"}
                        detail={"Perfect for events and parties, our catering services offer a range of delectable options to suit any occasion."}
                    />
                </div>

            </div>
        </div >
    )
}

export default Service