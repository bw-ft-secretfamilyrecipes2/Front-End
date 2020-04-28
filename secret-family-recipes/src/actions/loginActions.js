import { axiosWithAuth } from '../utils/axiosWithAuth.js'

export const POST_LOGIN_START = 'POST_LOGIN_START';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';

//makes a call to randomdog api and returns media of a dog when succesful
export const postLogin = (credentials) => dispatch =>{
    dispatch({type:POST_LOGIN_START});
    axiosWithAuth()
    .post('/login',credentials)
    .then(res =>{
        localStorage.setItem('token', JSON.stringify(res.data.token));
        console.log(res.data)
        dispatch({type:POST_LOGIN_SUCCESS, payload: res.data});
    })
    .catch(err =>{
        dispatch({type:POST_LOGIN_FAILURE, payload: err})
    })
}

