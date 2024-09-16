import { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setValue("");
    console.log(props);
    props.Todo(value);
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
