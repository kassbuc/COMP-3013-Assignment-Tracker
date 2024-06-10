import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

export function Assignment( {assignmentTitle} ) {
  return (
    // add functionality to this button
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{assignmentTitle}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
