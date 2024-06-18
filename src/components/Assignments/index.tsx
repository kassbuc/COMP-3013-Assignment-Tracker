import { TAssignment } from "../../types";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useState } from "react";

type Props = {
  assignmentCount: number,
  assignmentList: TAssignment[] | []
  setAssignmentCount: React.Dispatch<React.SetStateAction<number>>
  setAssignmentList: React.Dispatch<React.SetStateAction<TAssignment[]>>
}

export function Assignments( {assignmentCount, assignmentList, setAssignmentCount, setAssignmentList}: Props ) {
  let [completed, setCompleted] = useState<number>(0);

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentCount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completed} of {assignmentCount}</span>
        </div>
      </header>

      <div className={styles.list}>
        {
          assignmentList.map( (assignment) => 
            < Assignment 
              key={assignment.id} 
              assignment={assignment} 
              setCompleted={setCompleted} 
              setAssignmentCount={setAssignmentCount} 
              setAssignmentList={setAssignmentList}
              assignmentList={assignmentList}
            />
          )
        }
      </div>
    </section>
  );
}
