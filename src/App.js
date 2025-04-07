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
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        + Add New Project
      </button>

      <AddProjectModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onCreate={handleCreate}
      />
      <ProjectsHeader/>
      <ProjectsList/>
      <AddProjectModal/>
      <ProjectCard/>
  
    </div>
  );
}

export default App;
