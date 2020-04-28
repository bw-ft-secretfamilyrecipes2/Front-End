import {
    POST_LOGIN_START, 
    POST_LOGIN_SUCCESS, 
    POST_LOGIN_FAILURE, 
  } from '../actions/loginActions.js'
  
  export const intialState = {
    userID:'',
    username:'',
    token:'',
    isPosting:false,
    error: ''
    };
  
    //handles login actions, puts an auth token in local storage
    export const loginReducer = (state=intialState, action) =>{
      switch (action.type){
        case POST_LOGIN_START:
          console.log('POST_LOGIN_START')
          return{...state, isPosting: true}
        case POST_LOGIN_SUCCESS:
          console.log('POST_LOGIN_SUCCESS')
          return{...state, isPosting:false, userID:action.payload.loggedUser.id, username:action.payload.loggedUser.username, error:""}
        case POST_LOGIN_FAILURE:
          console.log('POST_LOGIN_ERROR', action.payload)
          return{...state, isPosting:false, error: action.payload}
  
        
      
          
          default:
              return state;
      }
    }