import { axiosWithAuth } from '../utils/axiosWithAuth.js'


export const GET_RECIPES_START = 'GET_RECIPES_START';
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';
export const GET_RECIPES_FAILURE = 'GET_RECIPES_FAILURE';


//makes a call to randomdog api and returns media of a dog when succesful
export const getRecipes = (userID) => dispatch =>{
    
    dispatch({type:GET_RECIPES_START});
    axiosWithAuth()
    .get(`/users/1/recipes`)
    .then(res =>{
        dispatch({type:GET_RECIPES_SUCCESS, payload: res.data});
        console.log(res.data,'res data')
    })
    .catch(err =>{
        dispatch({type:GET_RECIPES_FAILURE, payload: err})
    })
}