import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div>
            <nav className="menu_header">
                <div className="logos">
                    <img src={Logo} alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="">Order</a></li>
                        <li><a href="">Order Review</a></li>
                        <li><a href="">Manage Inventory</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;