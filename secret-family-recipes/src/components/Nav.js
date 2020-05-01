import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props =>{
    return(
        <header className="navContainer">
            <img className="logoImg"src={require("../common/hot-noodles.png")} />
            <h1 className="logo">Secret Family Recipes</h1>
            
            <nav className="nav">
                <section>
                <Link to='/'>
                <p className="btn">Home</p>
                </Link>
                </section>
                <section>
                <Link to='/about'>
                <p className="btn">About</p>
                </Link>
                </section>
                <section>
                <Link to='/register'>
                <p className="btn">Register</p>
                </Link>
                </section>
                <section>
                <Link to='/login'>
                <p className="btn">Login</p>
                </Link>
                </section>
               

            </nav>
        </header>
    )
}

export default Nav;