import { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';

interface VisualizerLayoutProps {
  children: ReactNode;
}

export const VisualizerLayout = ({ children }: VisualizerLayoutProps) => (
  <div className="min-h-screen w-full bg-slate-900 text-slate-100">
    <Navbar />
    <main className="p-4 lg:p-6">
      <div className="grid grid-cols-12 gap-4 max-w-[1920px] mx-auto">
        {children}
      </div>
    </main>
  </div>
);