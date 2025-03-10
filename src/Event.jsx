import React from 'react'

function Event() {
    const handlerClick = () => {
        alert("Cảm ơi bạn đã click");
    }
    const handlerChangeTextInput = (event) => {
        console.log(event.target.value);
    }
    return (
        <>

            <button onClick={handlerClick}>Click</button>

            <input type="text" onChange={(event) => handlerChangeTextInput(event)} />
        </>
    )
}

export default Event