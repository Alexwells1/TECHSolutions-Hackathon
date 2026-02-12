import React from 'react';
import type { IProject } from '../types/registration';

interface ProjectInfoProps {
  project?: IProject;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  return (
    <div className="bg-muted-bg/50 rounded p-6 border border-muted-light">
      <h3 className="text-lg font-medium -dark mb-4">Project Information</h3>
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium ">Project Title</label>
          <p className="mt-1 text-base">{project?.title}</p>
        </div>
        <div>
          <label className="text-sm font-medium ">Focus Area</label>
          <p className="mt-1 text-base">{project?.focusArea}</p>
        </div>
      </div>
    </div>
  );
};
