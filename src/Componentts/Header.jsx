import React from "react";
import { PiShoppingCart } from "react-icons/pi";
import "./Header.css"
import boat from "../Images/boat2.png"
import { IoIosArrowBack } from "react-icons/io";
import { RiShoppingBagLine } from "react-icons/ri";


export default function Header(){
    const Toggle = () =>{
        document.getElementById('c').style.right = "0px";
    }
    const Close = () =>{
        document.getElementById('c').style.right = "-45vw";
    }
    return(
        <div className="header">
            <h6><a href = "/"><img className = "boat" src = {boat}/></a></h6>
            <PiShoppingCart onClick={Toggle}  className = "cart-icon" />
            <div id = "c" className="cart">
                <div style={{margin: "8vh 1vw"}}>
                    <IoIosArrowBack onClick = {Close} style={{verticalAlign:"-3px",marginRight:"1rem"}}  size = {20}/>
                    <span>Your Cart <span style={{color:"#F02D34",fontWeight:"bold"}}>{0} items</span></span></div>
                <div className="cart-items">
                <RiShoppingBagLine size={150} />
                <p>Your shopping bag is empty</p>
                <button>CONTINUE SHOPPING</button>
                </div>
            </div>
        </div>

    )
}