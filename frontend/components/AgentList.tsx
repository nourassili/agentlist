// AgentList.tsx
"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Agent } from "../types/Agent";


// type Agent = {
//   id: string;
//   name: string;
//   logoUrl?: string;
//   description: string;
//   useCases?: string[];
//   category: string;
//   datePublished: string;
//   publisher: string;
//   upvotes: number;
//   website: string;
// };

interface AgentListProps {
  agents: Agent[];
  search: string;
}

const AgentList = ({ agents, search }: AgentListProps) => {
  const [expandedAgentId, setExpandedAgentId] = useState<string | null>(null);

  const filteredAgents = agents.filter((agent) => {
    const searchTerm = search.toLowerCase();
    return (
      agent.name.toLowerCase().includes(searchTerm) ||
      agent.description.toLowerCase().includes(searchTerm) ||
      agent.category.toLowerCase().includes(searchTerm) ||
      agent.useCases?.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  });

  return (
    <div className="w-full px-6 max-w-6xl mx-auto mb-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) =>
          agent.id === expandedAgentId ? (
            <div
              key={agent.id}
              className="col-span-full bg-white border border-green-200 rounded-xl shadow-lg p-8 relative"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={() => setExpandedAgentId(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                {agent.logoUrl && (
                  <img
                    src={agent.logoUrl}
                    alt={`${agent.name} logo`}
                    className="w-20 h-20 object-contain rounded-xl"
                  />
                )}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-green-900 mb-2">{agent.name}</h2>
                  <p className="text-gray-700 text-base mb-4">{agent.description}</p>
                  {agent.useCases && (
                    <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-4">
                      {agent.useCases.map((tag) => (
                        <span key={tag} className="bg-gray-100 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                    <div><strong>Category:</strong> {agent.category}</div>
                    <div><strong>Publisher:</strong> {agent.publisher}</div>
                    <div><strong>Date:</strong> {agent.datePublished}</div>
                    <div><strong>Upvotes:</strong> ↑ {agent.upvotes}</div>
                  </div>
                  <a
                    href={agent.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Website <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={agent.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
              onClick={() => setExpandedAgentId(agent.id)}
            >
              <div className="flex items-center gap-3 mb-2">
                {agent.logoUrl && (
                  <img
                    src={agent.logoUrl}
                    alt={`${agent.name} logo`}
                    className="w-10 h-10 object-contain rounded-md"
                  />
                )}
                <h2 className="text-xl font-bold text-green-900">{agent.name}</h2>
              </div>
              <p className="text-gray-700 text-sm mb-4">{agent.description.slice(0, 100)}...</p>
              <div className="text-green-700 font-semibold text-sm">
                ↑ {agent.upvotes} upvotes
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AgentList;

