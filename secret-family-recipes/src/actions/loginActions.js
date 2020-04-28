import { axiosWithAuth } from '../utils/axiosWithAuth.js'


export const POST_LOGIN_START = 'POST_LOGIN_START';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';


//makes a call to randomdog api and returns media of a dog when succesful
export const postLogin = (credentials, match) => dispatch =>{
    
    dispatch({type:POST_LOGIN_START});
    axiosWithAuth()
    .post('/auth/login',credentials)
    .then(res =>{
        dispatch({type:POST_LOGIN_SUCCESS, payload: res.data});
        localStorage.setItem('token', JSON.stringify(res.data.token));
        console.log(res.data)
        match.push(`/recipes`)
    })
    .catch(err =>{
        dispatch({type:POST_LOGIN_FAILURE, payload: err})
    })
}

