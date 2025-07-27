// components/Navbar.jsx
import { Globe } from 'lucide-react'; // or swap with another icon if preferred

export const Navbar = () => {
  return (
    <header className="w-full bg-white border-b shadow-sm py-4">
      {/* CONTENT WRAPPER: centers all navbar content and limits max width */}
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-green-900 font-medium">
        
        {/* LEFT: Logo + Brand Name */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌱</span>
          <span className="text-xl font-semibold">AgentList</span>
        </div>

        {/* CENTER: Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/Newsletter" className="font-semibold hover:text-green-700">Newsletter</a>
          <a href="/AgentRequest" className="font-semibold hover:text-green-700">Agent Request</a>
          <a href="/AgentSubmission" className="font-semibold hover:text-green-700">Agent Submission</a>
          <a href="/About" className="font-semibold hover:text-green-700">About</a>
        </nav>

        {/* RIGHT: Currency + Auth Buttons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 pr-4 border-r border-gray-300 text-sm">
            <Globe className="w-4 h-4" />
            <span>USD</span>
          </div>
          <a
            href="/SignUp"
            className="bg-green-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="bg-green-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition"
          >
            Log In
          </a>
        </div>

      </div>
    </header>
  );
};
