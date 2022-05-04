import './App.css';
import TodoList from './Components/TodoList';
import { useState } from 'react';
import Header from './Components/Header'
import TodoForm from './Components/TodoForm';
import Footer from './Components/Footer';

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => {
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    console.log(newTodos);
    setTodos(newTodos);
  }

  const ToggleComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].isComplete = !newTodos[id].isComplete;
    setTodos(newTodos);
  }

  return (
    <div className="ToddApp">
      <Header />
      <h1>My todos:</h1>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleCompleteTodo={ToggleComplete}
      />
      <TodoForm addNewTodo={addNewTodo} />
      <Footer />
    </div>
  );
}

export default App;
