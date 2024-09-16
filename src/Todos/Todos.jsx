import { useState } from "react";
import Form from "../components/Form/Form";
import styles from "./Todos.module.css";

export const Todos = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("Todo")) || []
  );

  const Todo = (value) => {
    let option = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: value,
          date: Intl.DateTimeFormat("ru-Us", option).format(),
          done: false,
        },
      ]);
      console.log(todos);
    } else {
      alert("Вы ничего не ввели");
    }
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((item) => item.id !== id)]);
  };

  const todoComplete = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      ),
    ]);
  };

  localStorage.setItem("Todo", JSON.stringify(todos));

  return (
    <div className={styles.container}>
      <Form Todo={Todo} />

      <ul className={styles.todo}>
        {todos.map((item) => {
          return (
            <li key={item.id} className={styles.todoLi}>
              <div className={styles.contain}>
                <input
                  className={styles.check}
                  type="checkbox"
                  defaultChecked={item.done}
                  onClick={() => {
                    todoComplete(item.id);
                  }}
                />
                <span
                  className={
                    item.done ? styles.todoComplete : styles.todoNoComplete
                  }
                >
                  <h3>Задача : {item.text}</h3>
                  <h3>Дата : {item.date}</h3>
                </span>
              </div>
              <img
                className={styles.deleteImage}
                src="./public/delete-clipboard-svgrepo-com.svg"
                onClick={() => {
                  deleteTodo(item.id);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
