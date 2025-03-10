import React, { useState } from 'react'

function Login() {

    const [userLogin, setuserLogin] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        usernameErr: "",
        passwordErr: ""
    })
    const handlerSubmitForm = (e) => {
        e.preventDefault();
        // console.log(validateForm(userLogin));
        const errors = validateForm(userLogin);
        if (Object.keys(errors).length > 0) {
            setErrors(errors)
            console.log("Loi");
            // console.log("Errr", errors);
        } else {
            console.log(userLogin);
            console.log(userLogin.username);
        }

    }
    const handlerBlur = (userLogin) => {
        const errors = validateForm(userLogin);
        setErrors(errors)
    }
    const validateForm = (data) => {
        let error = {};
        if (data.username.trim() == '') {
            error.usernameErr = "UserName Không rỗng"
        }
        if (data.password.trim() == '') {
            error.passwordErr = "UserName Không rỗng"
        }
        return error;
    }

    return (
        <>
            <div>Login {errors.usernameErr}</div>
            <div>Login {errors.passwordErr}</div>
            <form onSubmit={handlerSubmitForm}>
                <input type="text" placeholder='username' onChange={(e) => setuserLogin({ ...userLogin, username: e.target.value })} onBlur={() => handlerBlur(userLogin)} />
                <span style={{ color: "red" }}>{errors.usernameErr}</span>
                <br />
                <input type="password" placeholder='passsword' onChange={(e) => setuserLogin({ ...userLogin, password: e.target.value })} onBlur={() => handlerBlur(userLogin)} />
                <span style={{ color: "red" }}>{errors.passwordErr}</span>
                <br />
                <button>Login</button>
            </form>
        </>

    )
}

export default Login