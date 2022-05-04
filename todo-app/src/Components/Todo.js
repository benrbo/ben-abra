
import "./Todo.css";
import icon from '../asset/image/icon.png';

const Todo = ({ id, text, deleteTodo, isComplete, toggleCompleteTodo, ...props }) => {

    const deleteTodoHandler = (event) => {
        event.stopPropagation();
        deleteTodo(id);
    }
    const toggleCompleteHandler = (event) => {
        toggleCompleteTodo(id);
    }

    
    return (
        <div>
            <p>
                <input onClick={toggleCompleteHandler} type="checkbox"  checked={isComplete}/>
                {text}
                <img src={icon} alt="Logo" onClick={deleteTodoHandler} className="img-x" />
            </p >
        </div >
    )
}

export default Todo;