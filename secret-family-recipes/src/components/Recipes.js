import React, { useState ,useEffect } from 'react';
import { connect } from 'react-redux'; 

import {getRecipes} from '../actions/recipesActions.js' 

const Recipes = props =>{
    //console.log(props.loginData.userID)
    const [newRecipe, setNewRecipe] = useState({
        username: props.loginData.username,
        id: props.recipesData.recipes.length,
        user_id: props.loginData.userID,
        description:'',
        imageURL:'',
        prepTime:'',
        cookTime:'',
        yield:''
    })


    useEffect(()=>{
        props.getRecipes(props.loginData.userID)
    },[])

    console.log(props.recipesData);
    
    return(
        <div>
            <p>HELLO</p>
        </div>
    )
}

//data from reducer
const mapStateToProps = state => {
    return {
  
      loginData: state.loginReducer,
      recipesData: state.recipesReducer,
    };
  };
  
  export default connect(
  mapStateToProps,
  {getRecipes}
  )(Recipes)