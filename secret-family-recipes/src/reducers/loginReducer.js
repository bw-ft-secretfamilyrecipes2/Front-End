import {
    POST_LOGIN_START, 
    POST_LOGIN_SUCCESS, 
    POST_LOGIN_FAILURE, 
  } from '../actions/loginActions.js'
  
  export const intialState = {
    token:'',
    isPosting: false,
    error: ''
    };
  
    //handles login actions, puts an auth token in local storage
    export const loginReducer = (state=intialState, action) =>{
      switch (action.type){
        case POST_LOGIN_START:
          console.log('POST_LOGIN_START')
          return{...state, isPOSTing: true}
        case POST_LOGIN_SUCCESS:
          console.log('POST_LOGIN_SUCCESS')
          return{...state, isPosting:false, url:action.payload.url, error:""}
        case POST_LOGIN_FAILURE:
          console.log('POST_LOGIN_ERROR')
          return{...state, isPOSTing:false, error: action.payload}
  
        
      
          
          default:
              return state;
      }
    }