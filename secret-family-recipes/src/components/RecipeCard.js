import React, {useState} from "react"

import {axiosWithAuth} from '../utils/axiosWithAuth'

export default function RecipeCard(props){
    let recipe=props.recipe

    //state for our editted Recipe
    const [editRecipe, setEditRecipe] = useState(recipe)
    //state for out edit, false is not editing true is editing
    const [edit, setEdit] = useState(false)
    //handle form changes
    const handleChange = event => {
        setEditRecipe({ ...editRecipe, [event.target.name]: event.target.value })
        console.log({editRecipe})
    };
    const ingredientsChange = function (event) {
        editRecipe.ingredients[event.target.id] = { ingredient: event.target.value }
    }
    const directionsChange = function (event) {
        editRecipe.directions[event.target.id] = { direction: event.target.value }
    }

    const submitEdit = event =>{
        event.preventDefault();
        axiosWithAuth()
            .put(`https://secret-family-recipes-bw.herokuapp.com/api/users/:userId/recipes/:recipeId${recipe.id}`, editRecipe)
            .then(res => {
                setEdit(false);
                props.setRecipes(res.data)
            })
            .catch(err =>console.log(err))

    }
    return(
        edit === false ?
        <div className="cardContainer">
            <h1>{recipe.recipeName}</h1>
            
            <img src={recipe.imageURL} />
            <div className="infoContainer">
                <p>Preparation Time: {recipe.prepTime}</p>
                <p>Cook Time: {recipe.cookTime}</p>
                <p>Yields: {recipe.yields}</p>
            </div>
            <h4>{recipe.description}</h4>
            
                <h3>Ingredients:</h3>
                <ul className="ingredientsList">
                    {
                        recipe.ingredients.map(function(ingredient){
                            return(
                                    <li>{ingredient.ingredient}</li>
                            )
                    
                        })
                    }
                </ul>
                
                <h3>Directions:</h3>
                <ol className="directionsList">
                    {
                        recipe.directions.map(function(direction){
                            return(
                                    <li>{direction.direction}</li>
                            )
                    
                        })
                    }
                </ol>
                
            
            <div>
                <button onClick={() => props.deleteRecipe(props.recipe.id)}> Delete</button>
                <button onClick={() => setEdit(!edit)}> Edit</button>
            </div>
        </div>:
        <form className="cardContainer">
            <div><input type='text' name='recipeName'placeholder={recipe.recipeName} onChange={handleChange} /></div>
            
            <img src={recipe.imageURL} />
            <div><input type='text' name='imageUrl' placeholder={recipe.imageURL} onChange={handleChange} /></div>
            <div className="infoContainer">
                <p>Preparation Time: <input type='text' name='prepTime' placeholder={recipe.prepTime} onChange={handleChange}/></p>
                <p>Cook Time: <input type='text' name='cookTime' placeholder={recipe.cookTime} onChange={handleChange}/></p>
                <p>Yield: <input type='text' name='yield' placeholder={recipe.yield} onChange={handleChange}/></p>
            </div>
            <h4><input type='text' name='description' placeholder={recipe.description} onChange={handleChange}/></h4>
            
                <h3>Ingredients:</h3>
                <ul className="ingredientsList">
                    {
                        recipe.ingredients.map(function(ingredient, id){
                            return(
                                    <li><input type='text' name='ingredient' id={id} placeholder={ingredient.ingredient} onChange={ingredientsChange}/></li>
                            )
                    
                        })
                    }
                </ul>
                
                <h3>Directions:</h3>
                <ol className="directionsList">
                    {
                        recipe.directions.map(function(direction,id){
                            return(
                                    <li><input type='text' name='direction' id={id} placeholder={direction.direction} onChange={directionsChange}/></li>
                            )
                    
                        })
                    }
                </ol>
                
            
            <div>
                <button onClick={submitEdit}>Save</button>
                <button onClick={() => setEdit(!edit)}>Cancel</button>
            </div>
        </form>
    )
}