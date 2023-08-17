import React from "react";

const TableData = ({ element, index, handleEdit, handleDelete }) => {
    return (
        <>
            <td>{index + 1}</td>
            <td>{element.fullname}</td>
            <td>{element.location}</td>
            <td>{element.designation}</td>
            <td onClick={() => handleEdit(index)}>Edit</td>
            <td onClick={() => handleDelete(index)}>Delete</td>
        </>
    )
};

export default TableData;
