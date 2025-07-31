import { useState } from 'react';
import { FiEdit, FiTrash2, FiCheckCircle } from 'react-icons/fi';

const ToDoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-xl transition-all hover:shadow-xl transform hover:scale-[1.01]">
      <div className="flex items-center gap-3 w-full">
        <input
          type="radio"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="h-5 w-5 text-green-600 cursor-pointer"
        />

        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="flex-grow px-3 py-1 border border-gray-300 rounded-md"
          />
        ) : (
          <span
            className={`flex-grow text-base font-medium ${
              todo.completed ? 'line-through text-gray-500' : 'text-gray-700'
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2 ml-4">
        {isEditing ? (
          <button
            onClick={() => {
              editTodo(todo.id, editValue);
              setIsEditing(false);
            }}
            className="text-green-600 hover:text-green-700 text-xl"
            title="Save"
          >
            <FiCheckCircle />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-600 text-xl"
            title="Edit"
          >
            <FiEdit />
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-600 text-xl"
          title="Delete"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
