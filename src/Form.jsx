import React, { useState } from 'react'

function Form() {

    const [userName, setuserName] = useState("");
    const handlerFormSubmit = (e) => {
        e.preventDefault();
        alert(`Chào mừng ${userName} đã đăng ký tài khoản`);
        setuserName("");
    }
    return (
        <>
            <form onSubmit={handlerFormSubmit}>
                <label>Nhập vào Họ Tên</label>
                <input value={userName} onChange={(e) => setuserName(e.target.value)} />
                <button>Gửi</button>
            </form>
        </>
    )
}

export default Form