import React, { useState, useEffect } from 'react';
import * as yup from 'yup'
import { connect } from 'react-redux';

import { getRecipes, addRecipe } from '../actions/recipesActions.js'

function arrayRemove(arr, value) {
    return arr.filter(function (element) { return element != value; });
}
const initialRecipeValues = {
    recipeName: '',
    description: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    yield: '',
    ingredients: [],
    directions: []
}
const initialRecipeErrors = {
    recipeName: '',
    description: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    yield: '',
}

const formSchema = yup.object().shape({
    recipeName: yup
        .string()
        .required('This recipe needs a name!')
        .min(2, 'Recipe name needs atleast 2 characters!'),
    description: yup
        .string()
        .required('You need a description for your delicious recipe!')
        .min(6, 'Your description must be 6'),
    imageURL: yup
        .string()
        .required('You need a url for your image')
        .url('Please enter a valid url for your image.'),
    prepTime: yup
        .string()
        .required('You need to add the Recipe Preparation Time.'),
    cookTime: yup
        .string()
        .required('Cook Time cannot be blank'),
    yield: yup
        .string()
        .required('Please enter a number for the amount of servings this recipe provides.'),
    ingredients: yup
        .string(),
    directions: yup
        .string()
})

const Recipes = (props) => {
    const [newRecipe, setNewRecipe] = useState({
        username: props.loginData.username,
        id: props.recipesData.recipes.length,
        user_id: props.loginData.userID,
        recipeName: '',
        description: '',
        imageURL: '',
        prepTime: '',
        cookTime: '',
        yield: '',
        ingredients: [],
        directions: []
    })
    //ingredient array
    const [ingredients, setIngredients] = useState([])
    //directions array
    const [directions, setDirections] = useState([])

    const [recipeErrors, setRecipeErrors] = useState(initialRecipeErrors)
    const [submitDisabled, setSubmitDisabled] = useState(true)
    useEffect(function () {
        formSchema.isValid(newRecipe)
            .then(valid => { // either true or false
                setSubmitDisabled(!valid)
            })
    }, [newRecipe])

    const onSubmit = function (event) {
        event.preventDefault()
        // const incomingRecipe={
        //     recipeName: newRecipe.recipeName,
        //     description: newRecipe.description,
        //     imageURL: newRecipe.imageURL,
        //     prepTime: newRecipe.prepTime,
        //     cookTime: newRecipe.cookTime,
        //     yield: newRecipe.yield,
        //     ingredients: newRecipe.ingredients,
        //     directions: newRecipe.directions
        // }
        //we actually dont need to shape our object any further, you handled this when using the onChange
        //im going to clean this up in login and register too
        //depending on what shape we send to this end point, we might send the recipe without the directions and 
        //ingredients, just waiting on backend to give us more instructions. we might not even

        //props.addRecipe(newRecipe)
        setNewRecipe(initialRecipeValues)
        setIngredients([])
        setDirections([])
    }
    const changeHandler = function (event) {
        const name = event.target.name
        const value = event.target.value
        yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid => {
                // CLEAR ERROR
                setRecipeErrors({
                    ...recipeErrors,
                    [name]: '',
                })
            })
            .catch(error => {
                setRecipeErrors({
                    ...recipeErrors,
                    [name]: error.errors[0]
                })
            })

        setNewRecipe({
            ...newRecipe,
            [name]: value,
        })
        console.log({ newRecipe })
    }

    useEffect(() => {
        props.getRecipes(props.loginData.userID)
    }, [])

    // console.log(props.recipesData);

    const addIngredient = function (event) {
        event.preventDefault()
        setIngredients([
            ...ingredients,
            { ingredient: "" }
        ])
    }
    // const removeIngredient = function(event){
    //     event.preventDefault()
    //     arrayRemove(ingredients, 1)
    //     console.log(ingredients)
    // }
    const ingredientsChange = function (event) {
        // you can even do
        // newRecipe.ingredients[event.target.id]={ingredient: event.target.value}
        //we can even add this into our changeHandler using if statements,
        //if event.target.name == ingredients then ingredients[event.target.id]={ingredient: event.target.value}
        //we can expand on this further and use an || and use the same if for both ingredients and directions
        ingredients[event.target.id] = { ingredient: event.target.value }
        newRecipe.ingredients = ingredients
        console.log(newRecipe)
    }

    const addStep = function (event) {
        event.preventDefault()
        setDirections([
            ...directions,
            { step: "" }
        ])
    }
    // const removeStep =function(event){
    //     event.preventDefault()

    // }
    const directionsChange = function (event) {
        directions[event.target.id] = { direction: event.target.value }
        newRecipe.directions = directions
        console.log(newRecipe)
    }
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
                                    name='ingredients'
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
                <button disabled={submitDisabled}>Add Recipe</button>
            </form>
        </div>
    )
}

//data from reducer
const mapStateToProps = state => {
    return {

        loginData: state.loginReducer,
        recipesData: state.recipesReducer,
    };
};

export default connect(
    mapStateToProps,
    {
        getRecipes,
        addRecipe
    }
)(Recipes)