"use client";

// # group : Top level browsing tab (AI Agents, Prompt Library, etc.)
// # category : Functional use case tag (Marketing, Automation, etc.)

import { Search as SearchIcon, Bot, FileText, Cpu, Workflow } from "lucide-react";

// Tool groups
const groups = [
  { icon: SearchIcon, label: "All Tools" },
  { icon: Bot, label: "AI Agents" },
  { icon: FileText, label: "Prompt Library" },
  { icon: Cpu, label: "Model Providers" },
  { icon: Workflow, label: "Agent Workflows" },
];

// Category tags per group
const categoriesByGroup: Record<string, string[]> = {
  "All Tools": ["Popular", "Trending", "Open Source", "Free", "Paid", "New"],
  "AI Agents": [
    "ASSISTANT", "CUSTOMER SUPPORT", "RESEARCH", "CONTENT CREATION", "SOCIAL MEDIA", "SALES",  "MARKETING", "WRITING", "ANALYSIS", "CODING", "WEBSITES", "PRODUCTIVITY", "PERSONAL ASSISTANT"],
  "Prompt Library": [
    "MARKETING", "EMAILS", "UX WRITING", "CODE GEN", "CREATIVE", "PERSONA"
  ],
  "Model Providers": [
    "OPENAI", "ANTHROPIC", "MISTRAL", "COHERE", "FINE-TUNED", "CUSTOM MODELS"
  ],
  "Agent Workflows": [
    "ZAPIER", "AUTOMATION", "NOTION", "WEB SCRAPING", "APIS", "CHAIN OF THOUGHT"
  ]
};

export const Hero = ({
  search,
  setSearch,
  activeGroup,
  setActiveGroup,
}: {
  search: string;
  setSearch: (val: string) => void;
  activeGroup: string;
  setActiveGroup: (val: string) => void;
}) => {
  return (
    <section className="w-full bg-white py-1 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-8">
          Time to Accelerate
        </h1>

        {/* Top-level groups */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {groups.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveGroup(label)}
              className={`flex items-center gap-2 text-sm md:text-base font-semibold transition-colors ${
                activeGroup === label
                  ? "text-green-900 border-b-2 border-green-900 pb-1"
                  : "text-green-700 hover:text-green-900"
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="w-full max-w-2xl flex items-center border border-gray-300 rounded-full shadow-sm overflow-hidden px-4 py-2 mb-6">
          <SearchIcon className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by agent name, task, or use case"
            className="flex-1 text-sm md:text-base py-2 px-2 focus:outline-none"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-all ml-2">
            Search
          </button>
        </div>

        {/* Category Tags (Use Cases) */}
        <div className="flex flex-wrap justify-center gap-3">
          {categoriesByGroup[activeGroup]?.map((tag) => (
            <span
              key={tag}
              onClick={() => setSearch(tag)}
              className="text-sm md:text-base border border-green-300 text-green-900 px-3 py-1 rounded-full hover:bg-green-100 cursor-pointer transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
