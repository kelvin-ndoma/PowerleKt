import React from "react";
import "./About.css"
import {Link} from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa';

function AboutUs(){
    return(
        
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="logo">PowerleKtain</Link>
                </h1>
            </div>

            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/equipments" >Products</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                    <Link to="/cart" className="cart">
                <FaShoppingCart className="custom-cart-icon"/>
              </Link>
                    </li>
                </ul>

            </div>
        </header>
      
    )
}
export default AboutUs;