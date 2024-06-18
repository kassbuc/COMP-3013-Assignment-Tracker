import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { useState } from "react";
import { TAssignment } from "../../types";
import { FaCheckCircle } from "react-icons/fa";

type Props = {
  assignment: any, //how do we type this????
  setCompleted: React.Dispatch<React.SetStateAction<number>>, 
  setAssignmentCount: React.Dispatch<React.SetStateAction<number>>, 
  setAssignmentList: React.Dispatch<React.SetStateAction<TAssignment[]>>, 
  assignmentList: TAssignment[] | []
}

export function Assignment( {assignment, setCompleted, setAssignmentCount, setAssignmentList, assignmentList}: Props ) {
  const [assignmentStyle, setAssignmentStyle] = useState("");
  const [circle, setCircle] = useState("display: block");
  const [checkBox, setCheckBox] = useState("display: none");

  function removeItem() {
    setCheckBox("none");
    setCircle("block");
    setAssignmentStyle("");
    assignment.completed = 0;
    setCompleted( (previous: number) => {
    return previous && previous - 1
    });
  }
  
  // change the icon, allow the list item to change back to not completed
  function handleCompleted(e: React.FormEvent) {
    e.preventDefault;
    // if completed circle is selected, change style and assign new value to completed
    if(!assignment.completed){
      setCheckBox("block");
      setCircle("none");
      setAssignmentStyle(styles.textCompleted);
      assignment.completed = 1;
      setCompleted( (previous: number) => {
      return previous + 1
    });
    }
    else{
      removeItem();
    }
  }
  
  function handleRemove(id: string) {
    setAssignmentCount((previous: number) => {
      return previous && previous - 1;
    });
    // remove the selected item by filtering out the item based on its id
    const newAssignmentList = assignmentList.filter( (item: any) => item.id !== id)
    setAssignmentList(newAssignmentList);
    removeItem();
  }

  return (
    <div className={styles.assignment}>
      <button onClick={handleCompleted} className={styles.checkContainer}>
        <div style={{display: circle}}/>
        < FaCheckCircle style={{display: checkBox}}/>
      </button>

      <p className={assignmentStyle}>{assignment.title}</p>

      <button onClick={ () => handleRemove(assignment.id) } className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
