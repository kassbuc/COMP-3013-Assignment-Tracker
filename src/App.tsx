import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";



function App() {
  const [textBox, setTextBox] = useState("");
  const [assignmentCount, setAssignmentCount] = useState(1);
  const [assignmentList, setAssignmentList] = useState({
    assignmentTitle: "Example Assignment",
    created: 1,
    completed: 0
  });

  return (
    <>
      <Header 
        textBox={textBox}
        setTextBox={setTextBox}
        assignmentCount={assignmentCount}
        setAssignmentCount={setAssignmentCount}
        assignmentList={assignmentList}
        setAssignmentList={setAssignmentList}
      />

      <Assignments assignmentCount={assignmentCount} assignmentList={assignmentList}/>
    </>
  );
}

export default App;
