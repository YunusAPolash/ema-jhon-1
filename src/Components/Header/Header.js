import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.svg';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="menu_header">
                <div className="logos">
                    <img src={Logo} alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to="/">Shop</Link></li>
                        <li><a href="">Order Review</a></li>
                        <li><a href="">Manage Inventory</a></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;