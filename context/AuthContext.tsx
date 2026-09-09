'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { User, AuthState } from '@/types';

// ─── Guest profile generator ────────────────────────────────────────────────
// Produces a unique, anonymous identity per session so no real personal data
// is ever hard-coded. Each call returns a different guest profile.
const ADJECTIVES = [
  'Swift', 'Bright', 'Clever', 'Bold', 'Calm',
  'Sharp', 'Keen', 'Nimble', 'Wise', 'Eager',
];
const NOUNS = [
  'Bee', 'Falcon', 'Fox', 'Owl', 'Wolf',
  'Hawk', 'Bear', 'Lynx', 'Crane', 'Raven',
];

function generateGuestUser(): User {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  const suffix = Math.floor(1000 + Math.random() * 9000); // 4-digit number
  const name = `${adj} ${noun}`;
  const handle = `${adj.toLowerCase()}.${noun.toLowerCase()}${suffix}`;

  return {
    id: `guest-${handle}`,
    name,
    email: `${handle}@workhive.local`,
    avatar: '',
  };
}
// ────────────────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthState>({
  user: null,
  isLoading: true,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Restore persisted session (each tab/incognito window has its own localStorage)
    try {
      const stored = localStorage.getItem('workhive_user');
      if (stored) setUser(JSON.parse(stored));
    } catch {
      // ignore
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(() => {
    setIsLoading(true);
    // Simulate Google OAuth round-trip delay
    setTimeout(() => {
      // Re-use existing session identity if the user is already "logged in" in this
      // browser; otherwise mint a fresh guest profile for this session.
      const existingRaw = localStorage.getItem('workhive_user');
      const guestUser: User = existingRaw
        ? (JSON.parse(existingRaw) as User)
        : generateGuestUser();

      setUser(guestUser);
      localStorage.setItem('workhive_user', JSON.stringify(guestUser));
      setIsLoading(false);
    }, 1200);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('workhive_user');
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
