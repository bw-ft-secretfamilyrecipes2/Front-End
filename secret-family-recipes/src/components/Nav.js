import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props =>{
    return(
        <header>
            <h1>Secret Family Recipes</h1>
            <nav class="btn">
                <Link to='/'>
                <a href="#">Home</a>
                </Link>
                <Link to='/about'>
                <a href="#">About</a>
                </Link>
                <Link to='/login'>
                <a href="#">Login</a>
                </Link>
            </nav>
        </header>
    )
}

export default Nav;