// components/Navbar.jsx

import { Globe } from 'lucide-react'; // or use Heroicons / your own icon

export const Navbar = () => {
  return (
    <header className="w-full bg-white border-b shadow-sm py-4 px-8 flex justify-between items-center text-green-900 font-medium">
      {/* Left: Logo + Brand */}
      <div className="flex items-center gap-2">
        {/* Replace 🌱 with an actual logo icon if you have one */}
        <span className="text-2xl">🌱</span>
        <span className="text-xl font-semibold">AgentList</span>
      </div>

      {/* Center: Navigation Links */}
      {/* Center: Navigation Links */}
      <nav className="hidden md:flex gap-6 text-sm">
        <a href="/Newsletter" className="font-semibold hover:text-green-700">Newsletter</a>
        <a href="/AgentRequest" className="font-semibold hover:text-green-700">Agent Request</a>
        <a href="/AgentSubmission" className="font-semibold hover:text-green-700">Agent Submission</a>
        <a href="/About" className="font-semibold hover:text-green-700">About</a>
      </nav>


      {/* Right: Language/Currency + Sign In */}
      <div className="flex items-center gap-4">
         
        <a
          href="/SignUp"
          className="bg-green-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition"
        >
          SignUp
        </a>
        <a
          href="/login"
          className="bg-green-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition"
        >
          LogIn
        </a>
      </div>
      
    </header>
  );
};
