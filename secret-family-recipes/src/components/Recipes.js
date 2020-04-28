import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 

import {getRecipes} from '../actions/recipesActions.js' 

const Recipes = props =>{
    //console.log(props.loginData.userID)

    useEffect(()=>{
        console.log(props.loginData)

        props.getRecipes(props.loginData.userID)
    },[])
    
    return(
        <div>
            <p>HELLO</p>
        </div>
    )
}

//data from reducer
const mapStateToProps = state => {
    return {
  
      loginData: state.loginReducer
    };
  };
  
  export default connect(
  mapStateToProps,
  {getRecipes}
  )(Recipes)