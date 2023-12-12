import React, { useState, useContext } from "react"
import "./Shop.css"
import Header from "../Componentts/Header"
import h1 from "../Images/h1.webp"
import { FaStar,FaRegStar } from "react-icons/fa";
import {Products} from "../Componentts/Products"
import Footer from "../Componentts/footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MyContext } from "../Componentts/Contextapi";
import { useNavigate } from "react-router-dom";

export default function Shop(){
    const navigate = useNavigate();
    const {cart,setCart} = useContext(MyContext);
    const {name} = useParams();
    const [pts,setPts] = useState({});

    useEffect(()=>{
        Products.map((itm)=>{
            if(itm.name === name){
                setPts({price:itm.price,src:itm.src,name:itm.name,id:itm.id,count:0})
            }
        })
},[name])
    const o = 3;
    const Star = () => {
        const stars = [];
      
        for (let i = 0; i < 5; i++) {
          if (i < o - 1) {
            stars.push(<FaStar key={i} size={30} />);
          } else {
            stars.push(<FaRegStar key={i} size={30} />);
          }
        }
        console.log(stars)
        return <>{stars}</>;
      };

    const handleCart = () =>{
        const productInCart = cart.find((item) => item.id === pts.id);
        if(productInCart){
            const upCart = cart.map((i)=>{
                if(i.id === pts.id){
                    return {...i, count: i.count+1};
                }
                else{
                    return i;
                }
            })
            setCart(upCart);
        }
        else{
            setCart([...cart, { ...pts, count: 1 }])
        }
    }
    const Add = () =>{
        const itemPresent = cart.find((item) => item.id === pts.id);
        if(itemPresent){
            const inc = cart.map((i)=>{
                if(i.id === pts.id){
                    return {...i, count: i.count+1};
                }
                else{
                    return i;
                }})
                setCart(inc);
        }
    }
    const Minus = () =>{
        const itemPresent = cart.find((item) => item.id === pts.id);
        if(itemPresent){
            const inc = cart.map((i)=>{
                if(i.id === pts.id && i.count!== 0){
                    return {...i, count: i.count-1};
                }
                else{
                    return i;
                }})
                setCart(inc);
        }
    }
    return(
        <div className="container">
            <Header cart={cart} setCart={setCart}/>
            <div className="shop-pg">
                <div className="item">
                    <div>
                        <div className="lg"><img src={pts.src}/></div>
                        <div className="sm"><img src={pts.src}/></div>
                    </div>
                    <div>
                        <h1 style={{marginBottom :"15px"}}>{decodeURIComponent(name)}</h1>
                        <div>{Star}</div>
                        <p style={{marginBottom :"15px"}}><b>Details:</b></p>
                        <p>Great looking and sounding headphone</p>
                        <h3 style={{marginBottom :"20px",marginTop:"20px"}}>${pts.price}</h3>
                        <div>
                            <b>Quantity:</b>
                            <span className="qs">
                                <button style={{color:"red"}} onClick={Minus}>-</button>
                                <text>{
                                    cart.length <= 0 ?  pts.count : (cart.find((item)=>item.id === pts.id) ? cart[cart.findIndex((item)=>item.id === pts.id)].count : pts.count)
                                    }</text>
                                <button style={{color:"green"}} onClick={Add}>+</button>
                            </span>
                        </div>
                        <div className="btns">
                            <button style={{color : "red",backgroundColor:"white",border : "1px solid red"}} onClick={()=>handleCart()}>
                                Add to Cart
                            </button>
                            <button style={{color : "white",backgroundColor:"red",border : "1px solid red"}}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="marquee">
                        <h1>You may also like</h1>
                        <marquee>
                            <div className="bs-product">
                            {Products.map((item) => (
                            <div className="pct" onClick = {()=>navigate(`/products/${encodeURIComponent(item.name)}`)}>
                                    <div className="items1"><img className="img1" src = {item.src}/></div>
                                    <p style={{marginTop : "1vh"}}>{item.name}</p>
                                    <b>${item.price}</b>
                                </div>
                        ))}
                           </div>
                        </marquee>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}