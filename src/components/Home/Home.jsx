import React from 'react'
import "./Home.css"
import Side from "../../asserts/pic3.png"
import small from "../../asserts/pic1.png"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home" >
            <div className="homeConteiner" data-aos="fade">
                <div className="left">
                    <h3>Welcome to</h3>
                    <h1>MDS Delights</h1>
                    <h3>Where Flavor Meets Elegance</h3>
                    <img src={small} alt="" data-aos="zoom-in" data-aos-delay="500" />
                    <Link to={"/shop"} data-aos="fade-up" data-aos-delay="500">
                        <button className=' home-btn' > Explore </button>
                    </Link>
                </div>
                <div className="right" data-aos="zoom-in" data-aos-delay="500">
                    <img src={Side} alt="" />
                </div>
            </div>
        </div >
    )
}

export default Home