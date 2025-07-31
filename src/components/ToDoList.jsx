import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="mt-6 space-y-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">Add some ToDo's!</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </div>
  );
};

export default ToDoList;
