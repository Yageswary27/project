import React from "react";

const ProjectCard = ({ project, viewType }) => {
  const scoreColor =
    project?.score >= 80
      ? "text-green-600"
      : project?.score >= 50
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <div
      className={`border border-blue-100 rounded-2xl p-5 shadow-md bg-white transition-transform duration-200 hover:scale-[1.01] ${
        viewType === "grid" ? "w-full sm:w-[48%] lg:w-[31%]" : "w-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {project?.favicon && (
            <img
              src={project.favicon}
              alt="favicon"
              className="w-6 h-6 rounded-sm"
            />
          )}
          <h3 className="font-semibold text-lg text-gray-800">
            {project?.name}
          </h3>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${
            project?.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {project?.status}
        </span>
      </div>

      {/* URL */}
      <p className="text-sm text-blue-600 break-all mb-2 font-medium">
        {project?.url}
      </p>

      {/* Last Scan */}
      <p className="text-sm text-gray-500 mb-2">
        Last Scan:{" "}
        <span className="font-medium text-gray-700">{project?.lastScan}</span>
      </p>

      {/* Score */}
      <p className={`text-base font-semibold mb-4 ${scoreColor}`}>
        Score: {project?.score}%
      </p>

      {/* Action Buttons */}
      <div className="flex gap-2 flex-wrap">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-medium shadow-sm">
          Scan
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1.5 rounded-md text-sm font-medium shadow-sm">
          View
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-medium shadow-sm">
          Edit
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1.5 rounded-md text-sm font-medium shadow-sm">
          Archive
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
