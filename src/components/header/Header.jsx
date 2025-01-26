import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="" alt="" />
                <h1>Weather App</h1>
            </div>
            <div className="navbar">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/comments">
                        <li>Comments</li>
                    </Link>
                    <Link to="/news">
                        <li>News</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;
