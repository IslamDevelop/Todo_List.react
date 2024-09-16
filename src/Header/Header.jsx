import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logotext}>
        Todo List
      </Link>

      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/Todos"> Todos </Link>
        </li>
      </ul>
    </div>
  );
};
