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
        <form>
            <div> {/*div to display errors */}
                <p>{errors.username}</p>
                <p>{errors.password}</p>
                <p>{errors.confirmPassword}</p>
            </div>
            <label>Username:
                <input
                    value={values.username}
                    onChange={changeHandler}
                    name='username'
                    type='text'
                />
            </label>
            <label>Password:
                <input
                    value={values.password}
                    onChange={changeHandler}
                    name='password'
                    type='password'
                />
            </label>
            <label>Confirm Password:
                <input
                    value={values.confirmPassword}
                    onChange={changeHandler}
                    name='confirmPassword'
                    type='password'
                />
            </label>
            <button onClick={onSubmit} disabled={disabled}>Sign Up</button>

        </form>
    )
}

export default SignUp