import React from 'react';
import { Card } from '@/components/ui/card';
import { Terminal } from 'lucide-react';

interface ConsoleOutputProps {
  output: string[];
}

export const ConsoleOutput: React.FC<ConsoleOutputProps> = ({ output }) => (
  <Card className="p-4 bg-slate-800/50 border-slate-700/50">
    <div className="flex items-center gap-2 mb-2">
      <Terminal className="w-4 h-4 text-slate-400" />
      <h3 className="font-medium text-slate-200">Console Output</h3>
    </div>
    <div className="border border-slate-700/50 rounded-lg p-2 font-mono bg-slate-900/50 min-h-[100px]">
      {output.map((line, i) => (
        <div key={i} className="text-sm text-slate-300">
          <span className="text-slate-500 select-none mr-2">&gt;</span>
          {line}
        </div>
      ))}
    </div>
  </Card>
);