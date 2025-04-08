import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Pagination from '../components/Pagination';

const ProjectsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  // Sample data
  const projects = [
    {
      name: 'Project 1',
      url: 'https://project1.com',
      website: { favicon: 'https://example.com/favicon.ico' },
      lastScanDate: '2025-04-01',
      score: 85,
      status: 'active',
    },
    {
      name: 'Project 2',
      url: 'https://project2.com',
      website: { favicon: 'https://example.com/favicon.ico' },
      lastScanDate: '2025-04-02',
      score: 72,
      status: 'active',
    },
    {
      name: 'Project 3',
      url: 'https://project3.com',
      website: { favicon: 'https://example.com/favicon.ico' },
      lastScanDate: '2025-04-03',
      score: 56,
      status: 'archived',
    },
    // Add more project data here...
  ];

  // Get paginated projects
  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);
  const displayedProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return React.createElement('div', { className: 'container mx-auto p-4' },
    React.createElement('div', { className: 'flex justify-between items-center mb-4' },
      // View Mode Toggle
      React.createElement('div', null,
        React.createElement('button', {
          onClick: () => setViewMode('grid'),
          className: `px-4 py-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`,
        }, 'Grid View'),
        React.createElement('button', {
          onClick: () => setViewMode('list'),
          className: `px-4 py-2 rounded-md ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`,
        }, 'List View'),
      ),
    ),

    // Projects List/Grid
    React.createElement('div', { className: `grid ${viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-1'} gap-4` },
      displayedProjects.map((project, index) =>
        React.createElement(ProjectCard, { key: index, project })
      ),
    ),

    // Pagination Controls
    React.createElement(Pagination, {
      currentPage,
      totalPages,
      onPageChange: handlePageChange,
    }),
  );
};

export default ProjectsPage;
