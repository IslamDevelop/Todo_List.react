
import Form from "../Form/Form";
import styles from "./Todos.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, todoComplete } from "../../store/todoSlice";

export const Todos = () => {
  const todos = useSelector(state => state.todos.todos)

  const dispatch = useDispatch()


  localStorage.setItem("Todo", JSON.stringify(todos));

  return (
    <div className={styles.container}>
      <Form />

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
                    dispatch(todoComplete(item.id));
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
                src="./src/assets/delete-clipboard-svgrepo-com.svg"
                onClick={() => {
                  dispatch(deleteTodo(item.id))
                  
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
