import axios from "axios";

export const FETCH_LOGIN_START = 'FETCH_LOGIN_START';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';

//makes a call to randomdog api and returns media of a dog when succesful
export const fetchDog = () => dispatch =>{
    dispatch({type:FETCH_LOGIN_START});
    axios.get()
    .then(response =>{
        dispatch({type:FETCH_LOGIN_SUCCESS, payload: response.data});
    })
    .catch(err =>{
        dispatch({type:FETCH_LOGIN_FAILURE, payload: err})
    })
}
