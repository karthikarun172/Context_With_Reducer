import React, { useContext, useState } from "react";
import useTodo from "../Context/TodoContext";

function Home() {
  const { todos, addTodos, removeTodos } = useTodo();

  const [things, setThings] = useState("");

  const convertToObject = (todo_Data) => {
    return { _id: `${Date.now()}`, data: todo_Data };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(convertToObject(things));
    setThings("");
  };

  return (
    <div>
      <h3>Home</h3>

      <input
        placeholder="add Data"
        value={things}
        onChange={(e) => setThings(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>

      <ul>
        {todos.map((t) => (
          <div key={t._id}>
            <li>{t.data}</li>
            <button onClick={() => removeTodos(t._id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
