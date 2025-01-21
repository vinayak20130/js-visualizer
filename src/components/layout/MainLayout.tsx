import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="min-h-screen w-full bg-slate-900">
    {children}
  </div>
);