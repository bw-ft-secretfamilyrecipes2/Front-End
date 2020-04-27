import {
    FETCH_LOGIN_START, 
    FETCH_LOGIN_SUCCESS, 
    FETCH_LOGIN_FAILURE, 
  } from '../actions/loginAction.js'
  
  export const intialState = {
    token:'',
    isFetching: false,
    error: ''
    };
  
    //handles login actions, puts an auth token in local storage
    export const loginReducer = (state=intialState, action) =>{
      switch (action.type){
        case FETCH_LOGIN_START:
          console.log('FETCH_LOGIN_START')
          return{...state, isFetching: true}
        case FETCH_LOGIN_SUCCESS:
          console.log('FETCH_LOGIN_SUCCESS')
          return{...state, isFetching:false, url:action.payload.url, error:""}
        case FETCH_LOGIN_FAILURE:
          console.log('FETCH_LOGIN_ERROR')
          return{...state, isFetching:false, error: action.payload}
  
        
      
          
          default:
              return state;
      }
    }