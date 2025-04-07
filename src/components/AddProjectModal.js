import React, { useState } from "react";

const AddProjectModal = ({ isOpen, onClose, onCreate }) => {
  const [projectName, setProjectName] = useState("");
  const [url, setUrl] = useState("");
  const [projectType, setProjectType] = useState("Website");
  const [scanTypes, setScanTypes] = useState([]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [error, setError] = useState("");

  const toggleScanType = (type) => {
    setScanTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = () => {
    if (!projectName || !url) {
      setError("Project Name and URL are required");
      return;
    }

    const urlPattern = /^https?:\/\/[\w.-]+\.[a-z]{2,}/;
    if (!urlPattern.test(url)) {
      setError("Please enter a valid URL (with http:// or https://)");
      return;
    }

    const projectData = {
      projectName,
      url,
      projectType,
      scanTypes,
    };

    onCreate(projectData);
    onClose();
    setProjectName("");
    setUrl("");
    setScanTypes([]);
    setProjectType("Website");
    setShowAdvanced(false);
    setError("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Project</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">✕</button>
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="space-y-4">
          {/* Project Name */}
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Name"
            className="w-full border px-3 py-2 rounded-md"
          />

          {/* URL */}
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourwebsite.com"
            className="w-full border px-3 py-2 rounded-md"
          />

          {/* Project Type */}
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option>Website</option>
            <option>Single Page</option>
            <option>File</option>
            <option>More</option>
          </select>

          {/* Scan Types */}
          <div>
            <label className="font-medium">Scan Types:</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {["Speed", "Security", "SEO"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={scanTypes.includes(type)}
                    onChange={() => toggleScanType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Advanced Settings */}
          <div>
            <button
              className="text-blue-600 text-sm underline"
              onClick={() => setShowAdvanced((prev) => !prev)}
            >
              {showAdvanced ? "Hide" : "Show"} Advanced Settings
            </button>

            {showAdvanced && (
              <div className="mt-3 p-3 border rounded bg-gray-50">
                <p className="text-sm text-gray-600">🛠️ Advanced configuration options coming soon...</p>
              </div>
            )}
          </div>

          {/* Create Button */}
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;
