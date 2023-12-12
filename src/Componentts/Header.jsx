import React, { useContext, useEffect, useState } from "react";
import { PiShoppingCart } from "react-icons/pi";
import "./Header.css"
import boat from "../Images/boat2.png"
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiShoppingBagLine } from "react-icons/ri";
import h1 from "../Images/h1.webp"
import { MyContext } from "./Contextapi";
import { useNavigate } from "react-router-dom";


export default function Header(){
    const [total,setTotal] = useState(0);
    const navigate = useNavigate();
   const {cart,setCart} = useContext(MyContext);
    const Toggle = () =>{
        document.getElementById('c').style.right = "0px";
        let sub = 0;
        cart.map((i)=>{
            console.log(i.price*i.count)
            sub = sub + (i.count*i.price);
    })
    setTotal(sub);
}

    const Close = () =>{
        document.getElementById('c').style.right = "-45vw";
    }

   
    const Remove = (id) =>{
        let updatedCart = cart.filter((item)=>item.id !== id);
        setCart(updatedCart);
    }
    const Add = (id) =>{
        console.log(id);
        const itemPresent = cart.find((item) => item.id === id);
        if(itemPresent){
            const inc = cart.map((i)=>{
                if(i.id === id){
                    return {...i, count: i.count+1};
                }
                else{
                    return i;
                }})
                setCart(inc);
        }
    }
    const Minus = (id) =>{
        console.log(id)
        const itemPresent = cart.find((item) => item.id === id);
        if(itemPresent){
            const inc = cart.map((i)=>{
                if(i.id === id && i.count!== 0){
                    return {...i, count: i.count-1};
                }
                else{
                    return i;
                }})
                setCart(inc);
        }
    }
    return(
        <div className="header">
            <h6><a href="/"><img className = "boat" src = {boat}/></a></h6>
            <div className="cart-i-contain"><PiShoppingCart onClick={Toggle}  className = "cart-icon" /><sup className="sup">{cart.length}</sup></div>
            <div id = "c" className="cart">
                <div style={{margin: "8vh 1vw"}}>
                    <IoIosArrowBack onClick = {Close} style={{verticalAlign:"-3px",marginRight:"1rem"}}  size = {20}/>
                    <span>Your Cart <span style={{color:"#F02D34",fontWeight:"bold"}}>{cart.length} items</span></span></div>
                {cart.length <= 0 ? (<div className="cart-items">
                <RiShoppingBagLine size={150} />
                <p>Your shopping bag is empty</p>
                <button onClick = {()=>{navigate("/");Close()}}>CONTINUE SHOPPING</button></div> ):

                (<div className="cart-items">
                    <div className="orderd-items">
                        {cart.map((i)=>(
                        <div className="ites">
                        <div className="ites-img"><img src = {i.src}/></div>
                        <div className="nm">
                            <h2>{i.name}</h2>
                            <span className="add-rem"><button className="rem" style={{color:"red"}} onClick = {()=>Minus(i.id)}>-</button><text>{i.count}</text><button style={{color:"green"}} className="add" onClick={()=>Add(i.id)}>+</button></span>  
                        </div>
                        <div className="pi">
                            <h2>${i.price}</h2>
                            <PiShoppingCart onClick = {()=>Remove(i.id)} style={{marginTop:"12vh"}} size={30}/>
                        </div>
                        
                        </div>
                        ))}
                    </div>
                        <div className="pay-section">
                                <span style={{display:"flex",justifyContent:"space-between"}} className="ps-total"><h1>Subtotal:</h1><h1>${total}</h1></span>
                                <button className="p-btn">Pay</button>
                        </div>
                        </div>)}
            </div>
        </div>

    )
}