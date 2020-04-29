import { axiosWithAuth } from '../utils/axiosWithAuth.js'


export const GET_RECIPES_START = 'GET_RECIPES_START';
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';
export const GET_RECIPES_FAILURE = 'GET_RECIPES_FAILURE';

export const POST_RECIPES_START = 'POST_RECIPES_START';
export const POST_RECIPES_SUCCESS = 'POST_RECIPES_SUCCESS';
export const POST_RECIPES_FAILURE = 'POST_RECIPES_FAILURE';

export const EDIT_RECIPES_START = 'EDIT_RECIPES_START';
export const EDIT_RECIPES_SUCCESS = 'EDIT_RECIPES_SUCCESS';
export const EDIT_RECIPES_FAILURE = 'EDIT_RECIPES_FAILURE';

export const DELETE_RECIPES_START = 'DELETE_RECIPES_START';
export const DELETE_RECIPES_SUCCESS = 'DELETE_RECIPES_SUCCESS';
export const DELETE_RECIPES_FAILURE = 'DELETE_RECIPES_FAILURE';


//makes a call to backend api and returns an array of recipes
export const getRecipes = (userID) => dispatch =>{
    
    dispatch({type:GET_RECIPES_START});
    axiosWithAuth()
    .get(`/users/1/recipes`)
    .then(res =>{
        dispatch({type:GET_RECIPES_SUCCESS, payload: res.data});
        //console.log(res.data,'res data')
    })
    .catch(err =>{
        dispatch({type:GET_RECIPES_FAILURE, payload: err})
    })
}
//makes a call to backend api and adds a recipe
export const addRecipe = (userID,recipe) => dispatch =>{
    
    dispatch({type:POST_RECIPES_START});
    axiosWithAuth()
    .post(`/users/${userID}/recipes`, recipe)
    .then(res =>{
        dispatch({type:POST_RECIPES_SUCCESS, payload: res.data});
        console.log(res.data,'res data')
    })
    .catch(err =>{
        dispatch({type:POST_RECIPES_FAILURE, payload: err})
    })
}
//makes a call to backend api and updates a recipe
export const editRecipe = (userID, recipeID, recipe) => dispatch =>{
    
    dispatch({type:POST_RECIPES_START});
    axiosWithAuth()
    .put(`/users/${userID}/recipes/${recipeID}`, recipe)
    .then(res =>{
        dispatch({type:POST_RECIPES_SUCCESS, payload: res.data});
        console.log(res.data,'res data')
    })
    .catch(err =>{
        dispatch({type:POST_RECIPES_FAILURE, payload: err})
    })
}
//makes a call to the backend api and deletes a recipe
export const deleteRecipe = (userID, recipeID) => dispatch =>{
    
    dispatch({type:POST_RECIPES_START});
    axiosWithAuth()
    .delete(`/users/${userID}/recipes${recipeID}`)
    .then(res =>{
        dispatch({type:POST_RECIPES_SUCCESS, payload: res.data});
        console.log(res.data,'res data')
    })
    .catch(err =>{
        dispatch({type:POST_RECIPES_FAILURE, payload: err})
    })
}