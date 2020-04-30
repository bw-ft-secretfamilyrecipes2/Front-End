import {
    GET_RECIPES_START, 
    GET_RECIPES_SUCCESS, 
    GET_RECIPES_FAILURE, 
  } from '../actions/recipesActions.js'
  
  export const initialState = {
    recipes:[{
      recipeName: '',
    description: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    yields: '',
    ingredients:[],
    directions:[]
    }],
    isGetting:false,
    error: ''
    };
  
    //handles RECIPES actions, puts an auth token in local storage
    export const recipesReducer = (state=initialState, action) =>{
      switch (action.type){
        case GET_RECIPES_START:
          console.log('GET_RECIPES_START')
          return{...state, isGetting: true}
        case GET_RECIPES_SUCCESS:
          console.log('GET_RECIPES_SUCCESS')
          return{...state, recipes:[...state.recipes, action.payload], isGetting:false, error:""}
        case GET_RECIPES_FAILURE:
          console.log('GET_RECIPES_ERROR', action.payload)
          return{...state, isGetting:false, error: action.payload}
  
        
      
          
          default:
              return state;
      }
    }
