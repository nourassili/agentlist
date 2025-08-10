"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

type OpenOpts = { onSignedIn?: () => void };
type AuthDialogCtx = {
  isOpen: boolean;
  open: (opts?: OpenOpts) => void;
  close: () => void;
  /** Call this when sign-in succeeds; runs the stored callback (if any) and closes. */
  resolveSignedIn: () => void;
};

const AuthDialogContext = createContext<AuthDialogCtx | null>(null);

export function AuthDialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const onSignedInRef = useRef<(() => void) | undefined>(undefined);

  const open = useCallback((opts?: OpenOpts) => {
    onSignedInRef.current = opts?.onSignedIn;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    onSignedInRef.current = undefined;
  }, []);

  const resolveSignedIn = useCallback(() => {
    const cb = onSignedInRef.current;
    onSignedInRef.current = undefined;
    setIsOpen(false);
    if (cb) cb();
  }, []);

  const value = useMemo(
    () => ({ isOpen, open, close, resolveSignedIn }),
    [isOpen, open, close, resolveSignedIn]
  );

  return (
    <AuthDialogContext.Provider value={value}>
      {children}
    </AuthDialogContext.Provider>
  );
}

export function useAuthDialog() {
  const ctx = useContext(AuthDialogContext);
  if (!ctx) throw new Error("useAuthDialog must be used within <AuthDialogProvider>");
  return ctx;
}
