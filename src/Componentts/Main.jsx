import React from "react"
import "./Main.css"
import bass from "../Images/h1.webp"
import {Products} from "./Products"

export default function Main(){
    return(
        <div className="main">
            <div className="trend">
                <div className="summersale">
                    <p>boosted bass</p>
                    <h1>Summer Sale</h1>
                    <button>Shop Now</button>
                </div>
                <img className="bass"  src={bass} alt = "404 Not found" />
            </div>
            <div className="products">
                <h1>Best Selling Products</h1>
                <p>Speakers of many variations</p>
                <div className="bs-products">
                {/*<li><img className="img" src = {Products.headset.src}/></li>
                <li><img className="img" src = {Products.earbuds.src}/></li>
                <li><img className="img" src = {Products.watch.src}/></li>
                <li><img className="img" src = {Products.w_headset.src}/></li>
    <li><img className="img" src = {Products.speaker.src}/></li> */}
                {Products.map((item) => (
                    <div >
                        <div className="items"><img className="img" src = {item.src}/></div>
                        <p style={{marginTop : "1vh"}}>{item.name}</p>
                        <b>{item.price}</b>
                    </div>
                    ))}
                </div>
            </div>

            <div className="offer">
                <div className="timetotime">
                    <p>30%</p>
                    <p>5<sup>th</sup>March to 30<sup>th</sup>April</p>
                </div>
                <img className="bas"  src={bass} alt = "404 Not found" />
                <div className="summersales">
                    <p>boosted bass</p>
                    <h1>Summer Sale</h1>
                    <p><b>Best headphones in the market</b></p>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    )
}