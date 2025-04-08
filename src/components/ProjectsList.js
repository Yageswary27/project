import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";

// Sample project list (replace with real API data)
const allProjects = [...Array(18)].map((_, i) => ({
  name: `Project ${i + 1}`,
  url: `https://example${i + 1}.com`,
  favicon: "https://www.google.com/favicon.ico",
  status: i % 2 === 0 ? "Active" : "Archived",
  score: Math.floor(Math.random() * 100),
  lastScan: "2025-04-08",
}));

const ProjectsList = ({ viewType = "grid" }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = allProjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="px-4">
      {/* Project Cards */}
      <div
        className={`flex flex-wrap gap-4 ${
          viewType === "grid" ? "" : "flex-col"
        }`}
      >
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} viewType={viewType} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProjectsList;
