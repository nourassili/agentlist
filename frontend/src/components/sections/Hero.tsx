// components/Hero.tsx
import { Bot, FileText, Cpu, Workflow, Search } from "lucide-react";

const categories = [
  { icon: Search, label: "All Tools" },
  { icon: Bot, label: "AI Agents" },
  { icon: FileText, label: "Prompt Library", active: true },
  { icon: Cpu, label: "Model Providers" },
  { icon: Workflow, label: "Agent Workflows" },
];

export const Hero = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-8">
          Build anything your way
        </h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {categories.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`flex items-center gap-2 text-green-900 text-sm md:text-base font-semibold hover:text-green-700 ${
                active ? "border-b-2 border-green-900 pb-1" : ""
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl flex items-center border border-gray-300 rounded-full shadow-sm overflow-hidden px-4 py-2">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Usecase"
            className="flex-1 text-sm md:text-base py-2 px-2 focus:outline-none"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-all ml-2">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};
