import React from 'react'
import "../components/Services/Service.css"

function Card({ image, heading, detail }) {
    return (
        <div className="card" >
            <img src={image} alt="" />
            <h3>{heading}</h3>
            <span>{detail}</span>
        </div>
    )
}

export default Card