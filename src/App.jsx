import { Homepage } from "@/modules/home/Homepage";
import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });
  const handleStartProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  console.log("Current project state:", projectState);

  return (
    <Homepage
      onAdd={handleAddProject}
      onProjectSelect={handleStartProject}
      projectState={projectState}
    />
  );
}

export default App;
