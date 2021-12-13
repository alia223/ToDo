import React from 'react'

function ToDo({ toDo, removeToDo, toggleComplete }) {
    const handleTaskDelete = () => {
        removeToDo(toDo.id)
    }

    const handleTaskComplete = () => {
        toggleComplete(toDo.id);
    }
    return (
        <tr>
            <th>
                <input type="checkbox" onClick={handleTaskComplete} defaultChecked={toDo.completed} />
            </th>
            <td>
                <span style={{ textDecoration: toDo.completed ? "line-through" : null }}>{toDo.task}</span>
            </td>
            <td>
                <button className="badge bg-danger" onClick={handleTaskDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default ToDo
