import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = ({ projects = [], viewType }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  
  // Safeguard to ensure projects is an array
  const currentProjects = Array.isArray(projects)
    ? projects.slice(indexOfFirstProject, indexOfLastProject)
    : [];

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div className="mt-6">
      {/* Grid/List Wrapper */}
      <div className={`flex flex-wrap gap-4 ${viewType === "list" ? "flex-col" : ""}`}>
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} viewType={viewType} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-3 py-1">{currentPage} / {totalPages}</span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectsList;
