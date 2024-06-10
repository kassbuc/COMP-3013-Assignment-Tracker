import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments( {assignmentCount, assignmentList} ) {

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentCount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>0 of {assignmentCount}</span>
        </div>
      </header>

      <div className={styles.list}>
        < Assignment assignmentTitle={assignmentList.assignmentTitle}/>
      </div>
    </section>
  );
}
