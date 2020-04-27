import axios from "axios";

export const POST_LOGIN_START = 'POST_LOGIN_START';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';

//makes a call to randomdog api and returns media of a dog when succesful
export const POSTDog = () => dispatch =>{
    dispatch({type:POST_LOGIN_START});
    axios.get()
    .then(response =>{
        dispatch({type:POST_LOGIN_SUCCESS, payload: response.data});
    })
    .catch(err =>{
        dispatch({type:POST_LOGIN_FAILURE, payload: err})
    })
}
