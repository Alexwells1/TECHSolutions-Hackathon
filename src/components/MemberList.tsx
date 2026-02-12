import React, { useState } from 'react';
import type { ITeamMember } from '../types/registration';
import { toast } from 'sonner';

interface MemberListProps {
  members?: ITeamMember[];
}

export const MemberList: React.FC<MemberListProps> = ({ members }) => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      toast.success('Email copied to clipboard');
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (err) {
      toast.error('Failed to copy email');
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-medium text-muted-dark mb-4">Team Members</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" role="table">
          <thead>
            <tr className="bg-muted-bg border-b border-muted-light">
              <th className="text-left p-3 font-medium text-muted-dark">Name</th>
              <th className="text-left p-3 font-medium text-muted-dark">Email</th>
              <th className="text-left p-3 font-medium text-muted-dark">Role</th>
              <th className="text-left p-3 font-medium text-muted-dark">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members?.map((member, index) => (
              <tr
                key={index}
                className={`border-b border-muted-light ${
                  index % 2 === 0 ? 'bg-white' : 'bg-muted-bg/30'
                }`}
              >
                <td className="p-3">{member.name}</td>
                <td className="p-3">{member.email}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      member.role === 'Leader'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-muted-bg text-muted-dark'
                    }`}
                  >
                    {member.role}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => copyToClipboard(member.email)}
                    className="text-sm text-primary hover:text-primary-dark transition-colors"
                    aria-label={`Copy ${member.name}'s email`}
                  >
                    {copiedEmail === member.email ? 'Copied!' : 'Copy Email'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
