import React from "react"

function SignUp(props) {
    const {
      values,
      changeHandler,
      onSubmit,
      disabled,
      errors,
    } = props

    return(
        <form className="signUpContainer">
            <h1>Sign Up</h1>
            <div> {/*div to display errors */}
                <p>{errors.username}</p>
                <p>{errors.password}</p>
                <p>{errors.confirmPassword}</p>
            </div>
            <div className="signUpInputs"> 
                <br /><label htmlFor='username'>
                    Username:
                    <input
                        value={values.username}
                        onChange={changeHandler}
                        name='username'
                        type='text'
                        placeholder='Create your Username'
                    />
                    </label>
                <br/>
                <label htmlFor='password'>
                Password:
                    <input
                        value={values.password}
                        onChange={changeHandler}
                        name='password'
                        type='password'
                        placeholder='Create your Password'
                    />
                    </label>
                <br/>
                <label htmlFor='confirmPassword'>Confirm Password:
                    <input
                        value={values.confirmPassword}
                        placeholder='Confirm password'
                        onChange={changeHandler}
                        name='confirmPassword'
                        type='password'
                    />
                </label>
            </div>
            <br/>
            <button onClick={onSubmit} disabled={disabled}>Sign Up</button>

        </form>
    )
}

export default SignUp