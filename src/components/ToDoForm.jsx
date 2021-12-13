import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

function ToDoForm({ addToDo }) {
    const [toDo, setToDo] = useState({
        id: "",
        task: "",
        completed: false
    });
    
    const handleTaskInputChange = (e) => {
        setToDo({
            ...toDo,
            task: e.target.value
        })
    }

    const handleSubmitTaskForm = (e) => {
        e.preventDefault();
        setToDo({
            ...toDo,
            task: ""
        });
    }

    const handleSubmitTaskClick = () => {
        addToDo({
            ...toDo,
            id: uuid()
        })
    }
    return (
        <form className="container" onSubmit={handleSubmitTaskForm} style={{ maxWidth: "30%" }}>
            <div className="row">
                <span>Task</span>
            </div>
            <div className="row">
                <div className="form-group col-8">
                    <input type="text" className="form-control" id="task" placeholder="Enter task" value={toDo.task} onChange={handleTaskInputChange} />
                </div>
                <button type="submit" className="btn btn-primary col-4" onClick={handleSubmitTaskClick}>Submit</button>
            </div>
        </form>
    )
}

export default ToDoForm
