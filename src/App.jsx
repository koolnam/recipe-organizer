import { Homepage } from "@/modules/home/Homepage";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [projectState, setProjectState] = useState(() => {
    const savedProjects = localStorage.getItem("projectState") || "[]";
    return {
      project: savedProjects ? JSON.parse(savedProjects) : [],
    };
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
  const handleDeleteProject = (projectId) => {
    setProjectState({
      ...projectState,
      project: projectState.project.filter(
        (project) => project.id !== projectId
      ),
    });
  };
  useEffect(() => {
    localStorage.setItem("projectState", JSON.stringify(projectState.project));
  }, [projectState.project]);

  console.log("Current project state:", projectState);

  return (
    <Homepage
      onAdd={handleAddProject}
      projectState={projectState}
      onDelete={handleDeleteProject}
    />
  );
}

export default App;
