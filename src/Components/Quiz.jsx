import React, { useState } from "react";

const Quiz = () => {
    const [inputField, setInputField] = useState('');
    const [toggle, setToggle] = useState(true)
    const [display, setDisplay] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputField === "ujjwal") {
            setToggle(false)
        } else {
            setDisplay(true)
        }
    }

    const handleChange = (e) => {
        setInputField(e.target.value)
    }

    return (
        <div>
            <h2>Quiz</h2>

            {toggle ?
                <form onSubmit={handleSubmit}>
                    <textarea rows={5} cols={40} placeholder="enter text hear ..." style={{ display: 'block', marginBottom: "10px", padding: '5px 10px' }} value={inputField} onChange={handleChange}></textarea>
                    <button type="submit" disabled={!inputField.length}>Submit</button>
                    {display ? <h2 style={{ color: 'red', fontWeight: 'bold' }}>Error</h2> : ""}
                </form> : <h1 style={{ color: 'green', fontWeight: 'bold' }}>Your Form is Submited</h1>
            }
        </div>
    )
};

export default Quiz;
