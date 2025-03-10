import React, { useState } from 'react'

function StateDemo() {

    const [textSearch, setTextSearch] = useState("Tìm Kiếm nhé");


    const [total, settotal] = useState(1);
    const handlerChageText = (value) => {
        console.log(value);
        // cập nhật lại state của textSearch
        setTextSearch(value)
    }
    const handlerIncrement = () => {
        settotal(total + 1)
    }
    const handlerDecrement = () => {
        if (total > 0) {
            settotal(total - 1);
        }
    }
    return (
        <>
            <input placeholder='Nhập vào họ tên' onChange={(e) => handlerChageText(e.target.value)}></input>
            <p>{textSearch}</p>


            <button onClick={handlerDecrement} disabled={total == 0}>-</button> <span>{total}</span> <button onClick={handlerIncrement}>+</button>
        </>
    )
}

export default StateDemo