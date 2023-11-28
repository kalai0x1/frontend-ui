import React from "react"
import "./footer.css"
import { VscTwitter } from "react-icons/vsc";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer(){
    return(
        <div className="footer">
            <p><b>2023 Boat Headphones All rights reserved</b></p>
            <span >
            <IoLogoWhatsapp size={30}/>
            <PiInstagramLogoFill style = {{margin : "0 5px"}} size={30}/>
            <VscTwitter size={30}/>
            
            </span>
        </div>
    )
}