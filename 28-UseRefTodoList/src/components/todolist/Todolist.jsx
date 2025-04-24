import React, { useEffect, useState } from "react";
import style from "./Todolist.module.css";
import { ToastContainer, toast } from "react-toastify";

const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [editId, seteditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submit = () => {
    if (todo.trim() === "") return;

    if (editId) {
      const updatedTodos = todos.map((item) =>
        item.id === editId ? { ...item, context: todo } : item
      );
      setTodos(updatedTodos);
      seteditId(null);
      toast("Todo yeniləndi", {
        className: style.toast,
      });
    } else {
      let newSira = 1;
      if (todos.length > 0) {
        newSira = todos[todos.length - 1].sira + 1;
      }

      const newTodo = {
        id: Date.now(),
        context: todo,
        sira: newSira,
      };
      setTodos([...todos, newTodo]);
      toast("Yeni todo əlavə olundu!", {
        className: style.toast,
      });
    }

    setTodo("");
  };

  const toggle = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
    toast("Status dəyişdi", { className: style.toast });
  };

  const deleteTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo.completed) {
      toast("İcra olunmayan todo silinmir!", { className: style.toast });
      return;
    }
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    toast("Todo silindi!", { className: style.toast });
  };

  const allDeleteTodo = () => {
    setTodos([]);
    toast("Hamısı silindi!", {
      className: style.toast,
    });
  };

  const editTodo = (item) => {
    seteditId(item.id);
    setTodo(item.context);
  };

  return (
    <div className={style.container}>
      <div>
        <h2>Todo List</h2>

        <input
          type="text"
          value={todo}
          placeholder={editId ? "Edit todo..." : "Add new todo..."}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className={style.add_save} onClick={submit}>
          {editId ? "Save" : "Add"}
        </button>
      </div>

      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            className={item.completed ? style.completed : style.notCompleted}
          >
            <div className={style.content}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggle(item.id)}
              />
              <strong>{item.sira}</strong>
              {item.context}
            </div>
            <div className={style.delete_edit}>
              <button onClick={() => deleteTodo(item.id)}>Sil</button>
              <button onClick={() => editTodo(item)}> Edit</button>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={allDeleteTodo}>All delete</button>
      <ToastContainer />
    </div>
  );
};

export default Todolist;
