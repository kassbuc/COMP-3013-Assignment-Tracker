import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

export function Header( {textBox: string, setTextBox, assignmentCount, setAssignmentCount, assignmentList, setAssignmentList} ) {
  
  // need to fix this to handle spaces
  const handleUserInput = (e: any) => {
    setTextBox(e.target.value.trim());

    // set the new assignment name to the input value
    const assignmentName = e.target.value.trim();
    const updateAssignmentList = { ...assignmentList} // create a new object by cloning the object assignmentList
    // set all parameters of the cloned object
    updateAssignmentList.assignmentTitle = assignmentName; 
    console.log(updateAssignmentList);
    setAssignmentList(updateAssignmentList);
  };

  function addAssignment() {
    setAssignmentCount(assignmentCount + 1); // increment created assignments
    // create a new assignment since we dont have a global variable for updateAssignmentList
  
    console.log(textBox);
    const newAssignment = {
      assignmentTitle: assignmentList.assignmentTitle, 
      created: 1,
      completed: 0
    }
    // HELP: why isnt this working?
    const newAssignments = [...assignmentList, newAssignment];
    setAssignmentList(newAssignments);
    console.log(assignmentList);
    setTextBox(""); // clear the input box
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" value={textBox} onChange={handleUserInput}/>
        <button type="button" disabled={textBox.trim() === ""} onClick={addAssignment}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
