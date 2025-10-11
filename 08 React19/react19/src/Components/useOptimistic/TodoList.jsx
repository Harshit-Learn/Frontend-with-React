import { useOptimistic, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(
    todos,
    (oldTodos, newTodo) => [...oldTodos, { text: newTodo, pending: true }]
  );

  const handleAddTodo = async (formData) => {
    const newTodo = formData.get("todo");
    setOptimisticTodos(newTodo);
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate delay

    setTodos((currentTodos) => [
      ...currentTodos,
      { text: newTodo, pending: false },
    ]);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <form action={handleAddTodo}>
        <input type="text" name="todo" placeholder="Enter todo..." />
        <button type="submit">Add Todo</button>
      </form>
      {optimisticTodos.map((todo, index) => (
        <div key={index}>
          {todo.text}
          {todo.pending && <span>Addding..</span>}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
