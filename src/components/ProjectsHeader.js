import React, { useState } from "react";
import { LayoutGrid, List } from "lucide-react"; // Lucide icons
import AddProjectModal from "./AddProjectModal";

const ProjectsHeader = ({ totalProjects, onSearch, onSortChange, onViewToggle, viewType }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name");

  const handleSearch = () => {
    // Trigger search action when the button is clicked
    onSearch(searchQuery);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSortChange(e.target.value);
  };

  const [showModal, setShowModal] = useState(false);
  
  const handleCreate = (data) => {
    console.log("Created Project:", data);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border-b bg-white rounded-lg shadow-sm">
      {/* Title and Count */}
      <h2 className="text-2xl font-semibold">
        Projects <span className="text-gray-500">({totalProjects})</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        {/* Search Box */}
        <div className="flex items-center gap-2 w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border px-3 py-2 rounded-md bg-white focus:outline-none"
        >
          <option value="name">Sort by Name</option>
          <option value="date">Sort by Date</option>
          <option value="score">Sort by Score</option>
        </select>

        {/* View Toggle Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewToggle("grid")}
            className={`p-2 rounded ${viewType === "grid" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
            title="Grid View"
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => onViewToggle("list")}
            className={`p-2 rounded ${viewType === "list" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
            title="List View"
          >
            <List size={18} />
          </button>
        </div>
        <div className="flex items-center gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
