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
        console.log(validateForm(userLogin));
        if (validateForm(userLogin)) {
            console.log("Loi");
        } else {
            console.log(userLogin);
            console.log(userLogin.username);
        }

    }
    const validateForm = (data) => {

        if (data.username.trim() == '') {
            setErrors({ ...errors, usernameErr: "Tên không rỗng" })
            return true;
        }
        if (data.password.trim() == '') {
            setErrors({ ...errors, passwordErr: "Bát không rỗng" })
            return true;
        }
        return false;
    }
    return (
        <>
            <div>Login</div>
            <form onSubmit={handlerSubmitForm}>
                <input type="text" placeholder='username' onChange={(e) => setuserLogin({ ...userLogin, username: e.target.value })} />
                <span style={{ color: "red" }}>{errors.usernameErr}</span>
                <br />
                <input type="password" placeholder='passsword' onChange={(e) => setuserLogin({ ...userLogin, password: e.target.value })} />
                <span style={{ color: "red" }}>{errors.usernameErr}</span>
                <br />
                <button>Login</button>
            </form>
        </>

    )
}

export default Login