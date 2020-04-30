import { axiosWithAuth } from '../utils/axiosWithAuth.js';


export const GET_RECIPES_START = 'GET_RECIPES_START';
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';
export const GET_RECIPES_FAILURE = 'GET_RECIPES_FAILURE';

export const POST_RECIPEHEADER_START = 'POST_RECIPEHEADER_START';
export const POST_RECIPEHEADER_SUCCESS = 'POST_RECIPEHEADER_SUCCESS';
export const POST_RECIPEHEADER_FAILURE = 'POST_RECIPEHEADER_FAILURE';

export const POST_INGREDIENTS_START = 'POST_INGREDIENTS_START';

export const POST_DIRECTIONS_START = 'POST_DIRECTIONS_START';


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
    .get(`/users/${userID}/recipes`)
    .then(res =>{
        dispatch({type:GET_RECIPES_SUCCESS, payload: res.data});
        console.log(res.data,'get recipes res data')
    })
    .catch(err =>{
        dispatch({type:GET_RECIPES_FAILURE, payload: err})
    })
}
 const addIngredients =(recipeID, ingredient) => dispatch =>{
    dispatch({type:POST_INGREDIENTS_START})
    axiosWithAuth()
    .post(`/recipes/${recipeID}/ingredients`, ingredient)
    .then( res=>{
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const addDirections = (recipeID, step) => dispatch =>{
    dispatch({type:POST_DIRECTIONS_START})
    axiosWithAuth()
    .post(`/recipes/${recipeID}/steps`, step)
    .then( res=>{
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })

}

//makes a call to backend api and adds a recipe
export const addRecipeHeader = (userID,recipe, ingredients, directions) => dispatch =>{
    dispatch({type:POST_RECIPEHEADER_START})
    axiosWithAuth()
    .post(`/users/${userID}/recipes`, recipe)
    .then(res =>{
        dispatch({type:POST_RECIPEHEADER_SUCCESS, payload: res.data});
        console.log(res.data,'add recipes res data')        
        ingredients.forEach(element =>{
            addIngredients(res.data[0].id, element)
        })
        directions.forEach((element, index) =>{
            addDirections(res.data[0].id, {stepNum:index+1 ,element})
        })

    })
    .catch(err =>{
        dispatch({type:POST_RECIPEHEADER_FAILURE, payload: err})
    })

}   



//makes a call to backend api and updates a recipe
export const editRecipe = (userID, recipeID, recipe) => dispatch =>{
    
    dispatch({type:POST_RECIPEHEADER_START});
    axiosWithAuth()
    .put(`/users/${userID}/recipes/${recipeID}`, recipe)
    .then(res =>{
        dispatch({type:POST_RECIPEHEADER_SUCCESS, payload: res.data});
        console.log(res.data,'res data')
    })
    .catch(err =>{
        dispatch({type:POST_RECIPEHEADER_FAILURE, payload: err})
    })
}
//makes a call to the backend api and deletes a recipe
export const deleteRecipe = (userID, recipeID) => dispatch =>{
    
    dispatch({type:DELETE_RECIPES_START});
    axiosWithAuth()
    .delete(`/users/${userID}/recipes${recipeID}`)
    .then(res =>{
        dispatch({type:DELETE_RECIPES_SUCCESS, payload: res.data});
        console.log(res.data,'res data')
    })
    .catch(err =>{
        dispatch({type:DELETE_RECIPES_FAILURE, payload: err})
    })
}