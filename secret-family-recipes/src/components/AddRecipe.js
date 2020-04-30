import React from "react"


export default function AddRecipe(props){
    const {
        newRecipe,
        ingredients,
        directions,
        addStep,
        addIngredient,
        changeHandler,
        ingredientsChange,
        directionsChange,
        onSubmit,
        submitDisabled,
        recipeErrors,
      } = props
    return (
        <div>
            <p>Add Recipe</p>
            <form onSubmit={onSubmit}>
                <label>Recipe Name:
                    <input
                        name="recipeName"
                        value={newRecipe.recipeName}
                        type="text"
                        onChange={changeHandler}
                    />
                    {recipeErrors.recipeName ? <p>{recipeErrors.recipeName}</p> : <div></div>}
                </label>
                <br />
                <label>Description:
                    <input
                        name="description"
                        value={newRecipe.description}
                        type="text"
                        onChange={changeHandler}
                    />
                    {recipeErrors.description ? <p>{recipeErrors.description}</p> : <div></div>}
                </label>
                <br />
                <label>Image URL:
                    <input
                        name="imageURL"
                        value={newRecipe.imageURL}
                        type="text"
                        onChange={changeHandler}
                    />
                    {recipeErrors.imageURL ? <p>{recipeErrors.imageURL}</p> : <div></div>}
                </label>
                <br />
                <label>Preparation Time:
                    <input
                        name="prepTime"
                        value={newRecipe.prepTime}
                        type="text"
                        onChange={changeHandler}
                    />
                    {recipeErrors.prepTime ? <p>{recipeErrors.prepTime}</p> : <div></div>}
                </label>
                <br />
                <label>Cook Time:
                    <input
                        name="cookTime"
                        value={newRecipe.cookTime}
                        type="text"
                        onChange={changeHandler}
                    />
                    {recipeErrors.cookTime ? <p>{recipeErrors.cookTime}</p> : <div></div>}
                </label>
                <br />
                <label>Yield:
                    <input
                        name="yield"
                        value={newRecipe.yield}
                        type="text"
                        onChange={changeHandler}
                    />
                    {recipeErrors.yield ? <p>{recipeErrors.yield}</p> : <div></div>}
                </label>
                <br />
                <label>Ingredients:
                    <button onClick={addIngredient}>+</button>
                </label>
                <br />
                {
                    ingredients.map(function (val, idx) {
                        let ingredientId = `ingredient-${idx}`
                        return (
                            <div key={idx}>
                                <label htmlFor={ingredientId}>{`Ingredient #${idx + 1}`}</label>
                                <input
                                    type="text"
                                    name='ingredientName'
                                    data-id={idx}
                                    id={idx}
                                    className="ingredientInput"
                                    onChange={ingredientsChange}
                                />
                                <label>Amount</label>
                                <input
                                    type="text"
                                    name='amount'
                                    data-id={idx}
                                    id={idx}
                                    className="ingredientInput"
                                    onChange={ingredientsChange}
                                />
                                {/*<button onClick={removeIngredient}>-</button>*/}
                            </div>
                        )
                    })
                }
                <label>Directions:
                    <button onClick={addStep}>+</button>
                </label>
                {
                    directions.map(function (val, idx) {
                        let stepId = `step-${idx}`
                        return (
                            <div key={idx}>
                                <label htmlFor={stepId}>{`Step #${idx + 1}`}</label>
                                <input
                                    type="text"
                                    name='directions'
                                    data-id={idx}
                                    id={idx}
                                    className="step"
                                    onChange={directionsChange}
                                />
                                {/*<button onClick={removeStep}>-</button>*/}
                            </div>
                        )
                    })
                }
                <br />
                {/* {console.log(submitDisabled)} */}
                <button type='submit' disabled={submitDisabled}>Add Recipe</button>
                <button onClick={()=> props.setAddRecipe(false)}>Cancel </button>
            </form>
        </div>
    )
}