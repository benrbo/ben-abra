import "./Todo.css";
import icon from '../asset/image/icon.png';

const Todo = ({ id, text, isComplete, deleteTodo, toggleCompleteTodo, ...props }) => {

    const deleteTodoHandler = (event) => {
        event.stopPropagation();
        deleteTodo(id);
    }
    const toggleCompleteHandler = (event) => {
        toggleCompleteTodo(id);
    }
    return (
        <div>
            <p className={isComplete ? "completed" : ""}> <input onClick={toggleCompleteHandler} type="checkbox" />
                {text}
                <img src={icon} alt="Logo" onClick={deleteTodoHandler} className="img-x" />
            </p >
        </div >
    )
}

export default Todo;