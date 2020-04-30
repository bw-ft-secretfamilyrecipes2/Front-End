import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props =>{
    return(
        <header className="navContainer">
            <img className="logoImg"src={require("./pics/hot-noodles.png")} />
            <h1 className="logo">Secret Family Recipes</h1>
            
            <nav className="nav">
                <Link to='/'>
                <p href="#">Home</p>
                </Link>
                <Link to='/about'>
                <p href="#">About</p>
                </Link>
                <Link to='/login'>
                <p href="#">Login</p>
                </Link>
            </nav>
        </header>
    )
}

export default Nav;