import React, { useEffect, useState } from 'react'
import TableData from './TableData'
import Form from './Form'

const getLocalStorage = () => {
    let addData = localStorage.getItem('user')
    if (addData) {
        return addData = JSON.parse(localStorage.getItem('user'))
    } else {
        return []
    }
}

const Crud = () => {
    const [inputField, setInputField] = useState({
        fullname: "",
        location: "",
        designation: "",
    });
    const [addData, setAddData] = useState(getLocalStorage)
    const [toggle, setToggle] = useState(false)
    const [edit, setEdit] = useState()
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(addData))
    }, [addData])

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        if (toggle) {
            if (inputField.fullname !== "" && inputField.location !== "" && inputField.designation !== "") {
                let newTableData = addData
                Object.assign(newTableData[edit], inputField)
                setAddData([...newTableData])
                setInputField({
                    fullname: "",
                    location: "",
                    designation: "",
                })
            }
            setToggle(false)
        } else {
            if (inputField.fullname !== "" && inputField.location !== "" && inputField.designation !== "") {
                setAddData([...addData, inputField])
                setInputField({
                    fullname: "",
                    location: "",
                    designation: "",
                })
            }
            console.log(inputField);

            setFormError(validation(inputField))
            setIsSubmit(true)
        }
    };

    const validation = (values) => {
        // debugger
        let storingError = {}
        if (!values.fullname) {
            storingError.fullname = "error"
        }
        if (!values.location) {
            storingError.location = "error"
        }
        if (!values.designation) {
            storingError.designation = "error"
        }
        return storingError
    }

    useEffect(() => {
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formError);
        }
    })

    const handleChangeTodo = (e) => {
        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        })
    }

    const handleDelete = (id) => {
        const deleteData = addData.filter((element, index) => index !== id)
        setAddData(deleteData)
    }

    const handleEdit = (id) => {
        let tempData = addData[id]
        setInputField(tempData)
        setEdit(id)
        setToggle(true)
    }

    const clear = () => {
        localStorage.clear('user')
    }

    return (
        <div>
            <Form handleSubmitTodo={handleSubmitTodo} handleChangeTodo={handleChangeTodo} inputField={inputField} formError={formError} />

            <div className='table_container'>

                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Designation</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addData.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <TableData element={element} index={index} handleDelete={handleDelete} handleEdit={handleEdit} />
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

            <button onClick={clear} className='clear'>clear localStorage</button>
        </div>
    )
}

export default Crud