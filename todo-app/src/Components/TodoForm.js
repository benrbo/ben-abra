import { useState } from 'react';
import '../Components/TodoForm.css';

const TodoForm = ({ addNewTodo, ...props }) => {
    const [todoValue, setTodoValue] = useState("");

    const addNewTodoHandler = (event) => {
        addNewTodo({
            text: todoValue,
            isComplete: false
        });
    }
    
    return (
            <div class="Todo-Form">
                <input placeholder="Write a new todo..." type="text" onChange={(event) => setTodoValue(event.target.value)}></input>
                <button onClick={addNewTodoHandler}>Add</button>
            </div>
    )
}

export default TodoForm;