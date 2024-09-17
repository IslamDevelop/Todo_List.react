import { useState } from "react";
import styles from "./Form.module.css";
import { useDispatch } from "react-redux";
import { Todo } from "../../store/todoSlice";

const Form = () => {
  const [value, setValue] = useState("");

const dispatch = useDispatch()
  const addTodo = () => dispatch(Todo(value))

  const submit = (e) => {
    e.preventDefault();
    setValue("");
    addTodo();
    
  
  };

  const onChange = (e) => {
    console.log(value);
    setValue(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <label className={styles.label}>Добавь задачу</label>
      <input
        type="text"
        placeholder="Введите название"
        value={value}
        className={styles.inputText}
        onChange={onChange}
      />
    </form>
  );
};

export default Form;
