import React from 'react'
import ToDo from './ToDo';

function ToDoList({ toDos, removeToDo, toggleComplete }) {
    return (
        <table class="table table-bordered mt-5 m-auto" style={{width: "50%"}}>
              <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">Task</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {
                toDos.map(toDo => {
                    return <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} toggleComplete={toggleComplete} />
                })
            }
            </tbody>
        </table>
    )
}

export default ToDoList
