import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props =>{
    return(
        <header>
            <h1>Secret Family Recipes</h1>
            <nav class="nav">
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