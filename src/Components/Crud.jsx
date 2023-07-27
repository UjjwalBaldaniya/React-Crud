import React, { useState } from 'react'

const Crud = () => {
    const [inputField, setInputField] = useState({
        name: ""
    });
    const [addData, setAddData] = useState([])
    const [toggle, setToggle] = useState(false)
    const [edit, setEdit] = useState()

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        if (toggle) {
            let newTableData = addData
            Object.assign(newTableData[edit], inputField)
            setAddData([...newTableData])
            setInputField({
                name: ""
            })
            setToggle(false)
        } else {
            setAddData([...addData, inputField])
            setInputField({
                name: ""
            })
        }
    };

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

    return (
        <div>
            <form onSubmit={handleSubmitTodo}>
                <input
                    placeholder="add name..."
                    name='name'
                    value={inputField.name}
                    onChange={handleChangeTodo}
                />
                <button type="submit">submit</button>
            </form>

            {addData.map((element, index) => (
                <ul key={index}>
                    <li>{element.name} <button onClick={() => handleEdit(index)}>edit</button> <button onClick={() => handleDelete(index)}>delete</button></li>
                </ul>
            ))}
        </div>
    )
}

export default Crud