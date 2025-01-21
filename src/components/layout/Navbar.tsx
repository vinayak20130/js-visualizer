import React from 'react';
import { Code2, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => (
  <nav className="border-b border-slate-700/50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-blue-400" />
          <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            JS Execution Visualizer
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-slate-100"
            asChild
          >
            <a
              href="https://github.com/yourusername/js-execution-visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">View on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  </nav>
);