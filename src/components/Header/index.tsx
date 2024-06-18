import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { TAssignment } from "../../types";

type Props = {
  assignmentCount: number, 
  setAssignmentCount: React.Dispatch<React.SetStateAction<number>>, 
  setAssignmentList: React.Dispatch<React.SetStateAction<TAssignment[]>>
}

export function Header( {assignmentCount, setAssignmentCount, setAssignmentList}: Props ) {
  
  const [textBox, setTextBox] = useState("");

  // add assignment on form submit
  function addAssignment(e: React.FormEvent) {
    e.preventDefault();
    setAssignmentCount(assignmentCount + 1); 
    // create a new array, add the old array, then replace assignmentList with the new array - "..." copies all the values from the given array into the new array
    const newAssignment = {
      id: crypto.randomUUID(), 
      title: textBox, 
      completed: 0
    }

    // you can pass the previous state by passing a function with an argument. Then we return the new piece of state
    setAssignmentList( (assignmentList: TAssignment[])=>{
      return[ ...assignmentList, newAssignment ]
    } );
    setTextBox(""); // clear the input box
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={addAssignment}>
        
        <input placeholder="Add a new assignment" type="text" value={textBox} onChange={(e) => setTextBox(e.target.value.trim())}/>
        
        <button disabled={textBox.trim() === ""}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
