import React from "react"

export default function RecipeCard(props){
    let recipe=props.recipe
    return(
        <div className="cardContainer">
            <h1>{recipe.recipeName}</h1>
            
            <img src={recipe.imageURL} />
            <div className="infoContainer">
                <p>Preparation Time: {recipe.prepTime}</p>
                <p>Cook Time: {recipe.cookTime}</p>
                <p>Yield: {recipe.yield}</p>
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
                
            
            
        </div>
    )
}