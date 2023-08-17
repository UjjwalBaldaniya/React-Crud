import React from "react";

const Form = ({ handleSubmitTodo, handleChangeTodo, inputField, formError }) => {
    return (
        <>
            <div className="employee-form">
                <div className="container">
                    <h1 className="title">Employee Form</h1>

                    <form id="form" onSubmit={handleSubmitTodo}>
                        <div className="input-div">
                            <label>Name of Employee :- </label>
                            <input type="text" placeholder="Enter name" name="fullname" value={inputField.fullname} onChange={handleChangeTodo} />
                        </div>
                        <p className="error">{formError.fullname}</p>
                        <div className="input-div">
                            <label>Location :- </label>
                            <input type="text" placeholder="Enter location" name="location" value={inputField.location} onChange={handleChangeTodo} />
                        </div>
                        <p className="error">{formError.location}</p>
                        <div className="input-div">
                            <label>Designation :- </label>
                            <input type="text" placeholder="Enter designation" name="designation" value={inputField.designation} onChange={handleChangeTodo} />
                        </div>
                        <p className="error">{formError.designation}</p>
                        <button type="submit" className="btn">Employee Data</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Form;
