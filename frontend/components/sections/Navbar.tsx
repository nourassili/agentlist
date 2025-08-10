// components/Navbar.tsx 

// ✅ Requires: useAuth (AuthProvider) + useAuthDialog (AuthDialogProvider) mounted in app/layout
"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { useAuth } from "@/providers/AuthProvider";
import { useAuthDialog } from "@/providers/AuthDialogProvider";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const { open } = useAuthDialog();

  return (
    <header className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-green-900 font-medium">
        {/* LEFT: Logo + Brand Name */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-12 h-12 object-contain" />
          <span className="text-xl font-semibold">AgentList</span>
        </div>

        {/* CENTER: Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/Newsletter" className="font-semibold hover:text-green-700">Newsletter</Link>
          <Link href="/AgentRequest" className="font-semibold hover:text-green-700">Request</Link>
          <Link href="/AgentSubmission" className="font-semibold hover:text-green-700">Submit</Link>
          <Link href="/About" className="font-semibold hover:text-green-700">About</Link>
        </nav>

        {/* RIGHT: Currency + Auth */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 pr-4 border-r border-gray-300 text-sm">
            <Globe className="w-4 h-4" />
            <span>USD</span>
          </div>

          {!user ? (
            <>
              {/* both open the same auth modal */}
              <button
                onClick={() => open()}
                className="bg-green-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition"
              >
                Sign Up
              </button>
              <button
                onClick={() => open()}
                className="bg-green-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition"
              >
                Log In
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              {/* tiny user chip */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-200">
                <div className="h-6 w-6 rounded-full bg-green-900 text-white grid place-items-center text-xs">
                  {(user.displayName?.[0] || user.email?.[0] || "U").toUpperCase()}
                </div>
                <span className="hidden sm:inline text-sm">
                  {user.displayName || user.email}
                </span>
              </div>
              <button
                onClick={async () => { await logout(); }}
                className="px-5 py-2 rounded-full text-sm font-semibold border border-green-900 text-green-900 hover:bg-green-50 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
