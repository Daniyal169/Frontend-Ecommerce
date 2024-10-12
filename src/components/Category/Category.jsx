import React from 'react'
import "./Category.css"
import Fast from "../../asserts/fast.jpeg"
import Desi from "../../asserts/desi.jpeg"
import Chineese from "../../asserts/chineese.jpeg"

function Category() {
    return (
        <div className="category" >
            <h1 data-aos="slide-right">Categories</h1>
            <div className="cate-content" data-aos="fade-in">
                <div className="left">
                    <img src={Fast} alt="" />
                    <h2 className='cate-head'>Fast Food</h2>
                    <button className='cate-btn'>Visit</button>
                </div>
                <div className="mid">
                    <img src={Chineese} alt="" />
                    <h2 className='cate-head'>Chineese</h2>
                    <button className='cate-btn'>Visit</button>
                </div>
                <div className="right">
                    <img src={Desi} alt="" />
                    <h2 className='cate-head'>Desi</h2>
                    <button className='cate-btn'>Visit</button>
                </div>
            </div>
        </div>
    )
}

export default Category