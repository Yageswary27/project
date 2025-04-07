import React from "react";

const ProjectCard = ({ project, viewType }) => {
  // Remove the unnecessary score definition
  // const score = 100; 

  // Use project.score directly
  const scoreColor =
    project?.score >= 80
      ? "text-green-600"
      : project?.score >= 50
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <div
      className={`border rounded-lg p-4 shadow-sm bg-white ${
        viewType === "grid" ? "w-full sm:w-[48%] lg:w-[31%]" : "w-full"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {project?.favicon && (
            <img src={project.favicon} alt="favicon" className="w-5 h-5" />
          )}
          <h3 className="font-semibold text-lg">{project?.name}</h3>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            project?.status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {project?.status}
        </span>
      </div>

      <p className="text-sm text-blue-600 break-all mb-2">{project?.url}</p>

      <p className="text-sm text-gray-500 mb-2">
        Last Scan: {project?.lastScan}
      </p>

      <p className={`text-md font-semibold mb-2 ${scoreColor}`}>
        Score: {project?.score}% {/* Using project.score */}
      </p>

      <div className="flex gap-2 flex-wrap">
        <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
          Scan
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">
          View
        </button>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">
          Edit
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">
          Archive
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
