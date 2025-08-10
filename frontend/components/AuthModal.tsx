"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useAuthDialog } from "@/providers/AuthDialogProvider";
import { X } from "lucide-react";

export default function AuthModal() {
  const { isOpen, close, resolveSignedIn } = useAuthDialog();
  const { user, loading, signInWithGoogle } = useAuth();
  const cardRef = useRef<HTMLDivElement | null>(null);

  // ✅ Hooks always run in the same order — no early return before them.

  // Auto-close once user is signed in
  useEffect(() => {
    if (!loading && user) {
      resolveSignedIn();
    }
  }, [loading, user, resolveSignedIn]);

  // Basic focus trap & escape key
  useEffect(() => {
    if (!isOpen) return; // ✅ condition INSIDE the effect
    const prev = document.activeElement as HTMLElement | null;
    cardRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      prev?.focus();
    };
  }, [isOpen, close]);

  // Now it's safe to return early
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={close}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl outline-none"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-green-200 text-green-800 hover:bg-green-50"
          aria-label="Close login"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Logo + heading */}
        <div className="mb-5">
          <div className="mb-3 h-8 w-10 rounded-md bg-green-800" aria-hidden />
          <h2 className="text-2xl font-semibold text-gray-900">
            Sign in to unlock the best of AgentList.
          </h2>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={signInWithGoogle}
            className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-green-800 px-5 py-3 text-sm font-medium text-green-900 hover:bg-green-50"
          >
            <span className="h-5 w-5 rounded-sm bg-white shadow" aria-hidden />
            Continue with Google
          </button>

          <button
            disabled
            className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-full border-2 border-green-200 px-5 py-3 text-sm font-medium text-gray-500"
            title="Coming soon"
          >
            <span className="h-5 w-5 rounded-sm bg-white shadow" aria-hidden />
            Continue with email
          </button>
        </div>

        {/* Legal */}
        <p className="mt-6 text-center text-xs text-gray-500">
          By proceeding, you agree to our Terms and confirm you’ve read our Privacy Policy.
        </p>
      </div>
    </div>
  );
}
