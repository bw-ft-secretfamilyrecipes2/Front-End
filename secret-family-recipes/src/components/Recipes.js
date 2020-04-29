import React, { useState, useEffect } from 'react';
import * as yup from 'yup'
import { connect } from 'react-redux';
import AddRecipe from './AddRecipe'
import RecipeCard from './RecipeCard'
import { getRecipes, addRecipe } from '../actions/recipesActions.js'


const initialRecipeValues = {
    // username: props.loginData.username,
    // id: props.recipesData.recipes.length,
    // user_id: props.loginData.userID,
    recipeName: '',
    description: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    yield: '',
    //ingredients: [],
    //directions: []
}
const initialRecipeErrors = {
    recipeName: '',
    description: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    yield: '',
}

const dummyData = [
    {
        recipeName: `Mama's Special Breakfast Burritos`,
        description: `Juicy filled egg, ham, cheese, sausage burritos. Big mamas burritos yummy yummy. Juicy filled egg, ham, cheese, sausage burritos. Big mamas burritos yummy yummy. Juicy filled egg, ham, cheese, sausage burritos. Big mamas burritos yummy yummy`,
        imageURL: 'https://skinnyms.com/wp-content/uploads/2016/10/Zucchini-and-Egg-Breakfast-Burrito-Recipe.jpg',
        prepTime: '10 minutes',
        cookTime: '20 minutes',
        yield: '5 burritos',
        ingredients: [{ingredient: 'The Deliciouso Eggs'},{ingredient: 'The burrito thing watcha call it'},{ingredient: 'tha sauce'},{ingredient: 'The Deliciouso Eggs'},{ingredient: 'The burrito thing watcha call it'},{ingredient: 'tha sauce is so good man. You must have this sauce.'},{ingredient: 'The Deliciouso Eggs'},{ingredient: 'The burrito thing watcha call it'},{ingredient: 'tha sauce'},{ingredient: 'The Deliciouso Eggs'},{ingredient: 'The burrito thing watcha call it'},{ingredient: 'tha sauce'},{ingredient: 'The Deliciouso Eggs'},{ingredient: 'The burrito thing watcha call it'}],
        directions: [{direction: 'stuff everything into a box and into the microwave stuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwavestuff everything into a box and into the microwave'},{direction: 'EAT IT'}]
    },
    {
        recipeName: `Big Tyrones Steak Stew`,
        description: 'One swagalicious meal',
        imageURL: 'https://foremangrillrecipes.com/wp-content/uploads/2013/06/featured-ribeye-steak-foreman-grill.jpg',
        prepTime: '5 minutes',
        cookTime: '30 minutes',
        yield: '1 big ol steak',
        ingredients: [{ingredient: 'That aunt jemmia hot sauce'}, {ingredient: 'powdered swag'}],
        directions: [{direction: 'cook that stuff'},{direction: 'puddit in a pan and sauce that'},{direction: 'Sprinkle a bit of swagger'}]
    }
]
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
        recipeName: '',
        description: '',
        imageURL: '',
        prepTime: '',
        cookTime: '',
        yield: '',
        // ingredients: [],
        //directions: []
    })
    const [ingredients, setIngredients] = useState([])
    const [directions, setDirections] = useState([])

    const [recipeErrors, setRecipeErrors] = useState(initialRecipeErrors)
    const [submitDisabled, setSubmitDisabled] = useState(true)

    useEffect(function () {
        props.getRecipes(props.loginData.userID)
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
        console.log(newRecipe)
        props.addRecipe(props.loginData.userID, newRecipe)
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
        //newRecipe.ingredients = ingredients
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
        //newRecipe.directions = directions
        console.log(newRecipe)
    }
    return (
        <div className="recipesContainer">
            <AddRecipe
                newRecipe={newRecipe} 
                ingredients={ingredients}
                directions={directions}
                addIngredient={addIngredient}
                addStep={addStep}
                changeHandler={changeHandler} 
                ingredientsChange={ingredientsChange}
                directionsChange={directionsChange}
                onSubmit={onSubmit}
                submitDisabled={submitDisabled}
                recipeErrors={recipeErrors}
            />
            {
                dummyData.map(function(recipe){
                    return(
                        <RecipeCard
                            recipe={recipe}
                        />
                    )
                })
            }
            
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