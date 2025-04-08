import React, { useState } from "react";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectsList from "./components/ProjectsList";
import AddProjectModal from "./components/AddProjectModal";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCreate = (data) => {
    console.log("Created Project:", data);
  };

  return (
    <div className="p-4">
      <ProjectsHeader/>
      <ProjectsList/>
      <AddProjectModal/>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">

        </div>
  
       </div>
        );
      }

export default App;