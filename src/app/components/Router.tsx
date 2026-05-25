import { useState, createContext, useContext } from 'react';
import React from 'react';

// Adicionado 'help-center' no tipo Page
export type Page = 'home' | 'login' | 'signup' | 'find-work' | 'find-freelancers' | 'freelancer-dashboard' | 'client-dashboard' | 'help-center';

export type UserType = 'freelancer' | 'client' | null;


interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  avatar?: string;
}

interface RouterContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const RouterContext = createContext<RouterContextType>({
  currentPage: 'home',
  navigate: () => {},
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export function Router({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [user, setUser] = useState<User | null>(null);

  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  const login = (userData: User) => {
    setUser(userData);
    if (userData.type === 'freelancer') {
      setCurrentPage('freelancer-dashboard');
    } else if (userData.type === 'client') {
      setCurrentPage('client-dashboard');
    }
  };

  const logout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const isAuthenticated = user !== null;

  return (
    <RouterContext.Provider value={{ 
      currentPage, 
      navigate, 
      user, 
      login, 
      logout, 
      isAuthenticated 
    }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }
  return context;
}