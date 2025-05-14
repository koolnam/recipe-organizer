import { Homepage } from "@/modules/home/Homepage";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [projectState, setProjectState] = useState({
    project: [],
  });

  const handleAddProject = (projectData) => {
    const newproject = {
      ...projectData,
      id: uuidv4(),
    };
    setProjectState({
      ...projectState,
      project: [...projectState.project, newproject],
    });
  };
  console.log(projectState);

  console.log("Current project state:", projectState);

  return <Homepage onAdd={handleAddProject} projectState={projectState} />;
}

export default App;
