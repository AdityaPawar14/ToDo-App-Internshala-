import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 flex flex-col items-center justify-between">
      <div className="w-full max-w-xl p-6">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <Header />
          <div className="flex gap-3 mt-6">
            <input
              type="text"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Add a new task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={addTodo}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md transition"
            >
              Add
            </button>
          </div>
          <ToDoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-4 bg-white shadow-inner">
        <p className="text-sm text-gray-600">
          Access to this repo 👉   
          <a
            href="https://github.com/AdityaPawar14/ToDo-App-Internshala-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
             GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
