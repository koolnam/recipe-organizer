import { Homepage } from "@/modules/home/Homepage";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });
  const handleStartProject = (prevState) => {
    setProjectState({
      ...prevState,
      selectedProjectId: null,
    });
  };
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
