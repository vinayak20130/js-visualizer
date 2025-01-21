import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange, disabled }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="overflow-hidden border-2 border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
      <div className="bg-slate-900/90 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-sm text-slate-400 font-mono">JavaScript</span>
        </div>
      </div>
      <div className="p-4 bg-slate-900/50">
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-[500px] p-2 font-mono text-sm bg-transparent text-slate-300 border-0 focus:ring-0 resize-none focus:outline-none"
          disabled={disabled}
          spellCheck="false"
        />
      </div>
    </Card>
  </motion.div>
);