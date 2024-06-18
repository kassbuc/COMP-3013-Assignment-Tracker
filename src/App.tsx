import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { TAssignment } from "./types";

function App() {
  const [assignmentCount, setAssignmentCount] = useState<number>(1);
  // need to create an array with object inside in order to add more assignments to the end of the array
  const [assignmentList, setAssignmentList] = useState<TAssignment[]>([
    { id: crypto.randomUUID(), title: "Example assignment", completed: 0}
  ]);
  
  // note: setter function "setAssignmentList" needs an assignment when it gets passed to < Header />
  return (
    <>
      <Header 
        assignmentCount={assignmentCount}
        setAssignmentCount={setAssignmentCount}
        setAssignmentList={setAssignmentList}
      />

      <Assignments 
        assignmentCount={assignmentCount} 
        setAssignmentCount={setAssignmentCount} 
        assignmentList={assignmentList}
        setAssignmentList={setAssignmentList}
      />
    </>
  );
}

export default App;
