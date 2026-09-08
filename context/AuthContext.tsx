'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { User, AuthState } from '@/types';

const MOCK_USER: User = {
  id: 'user-workhive-001',
  name: 'Janitha Dilshan',
  email: 'janithadilshan317@gmail.com',
  avatar: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
};

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
    // Restore persisted session
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
    // Simulate Google OAuth delay
    setTimeout(() => {
      setUser(MOCK_USER);
      localStorage.setItem('workhive_user', JSON.stringify(MOCK_USER));
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
