import React from 'react';
import { Info } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ExecutionStepProps {
  step: string;
}

export const ExecutionStep: React.FC<ExecutionStepProps> = ({ step }) => (
  <Card className="p-4 bg-slate-800/50 border-slate-700/50 h-full flex flex-col">
    <div className="flex items-center gap-2 mb-2">
      <Info className="w-4 h-4 text-blue-400" />
      <h3 className="font-medium text-slate-200">Execution Step</h3>
    </div>
    <div className="p-3 border-l-4 border-blue-500/50 bg-blue-500/10 rounded-r flex-grow">
      <p className="text-sm text-blue-200">{step}</p>
    </div>
  </Card>
);