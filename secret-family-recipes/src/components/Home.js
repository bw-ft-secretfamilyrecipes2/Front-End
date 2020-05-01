import React from 'react';

const Home = props =>{
    return(
        <section>
            <p>Welcome to Secret Family Recipes!!</p>
            <img src={require("../common/food.jpg")} alt="table full of different foods"/>
            <p>Do you have favorite recipes that your gram wrote down that are fading? Are you afraid of losing those little receipe cards that hold your best creations?</p>
            <p>Come make an account and have no more fear of losing any precious dinner ideas!</p>
            <img src={require("../common/food2.jpg")} alt="different foods laid out in the shape of a heart"/>
            </section>
    )
}

export default Home;