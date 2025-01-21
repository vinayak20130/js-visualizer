import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Square, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface ControlPanelProps {
  onRun: () => void;
  onAutoPlay: () => void;
  onReset: () => void;
  onPrevious: () => void;
  onNext: () => void;
  isAutoPlaying: boolean;
  disabled: boolean;
  currentStep: number;
  totalSteps: number;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  onRun,
  onAutoPlay,
  onReset,
  onPrevious,
  onNext,
  isAutoPlaying,
  disabled,
  currentStep,
  totalSteps
}) => (
  <Card className="p-4 bg-slate-800/50 border-slate-700/50">
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={onRun}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          size="lg"
        >
          <Play className="w-4 h-4 mr-2" />
          Run Code
        </Button>
        <Button
          onClick={onAutoPlay}
          variant="outline"
          size="lg"
          disabled={disabled}
          className="border-2 border-slate-600"
        >
          {isAutoPlaying ? <Square className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
          {isAutoPlaying ? 'Stop' : 'Auto Play'}
        </Button>
      </div>

      <div className="flex items-center justify-between gap-2">
        <Button 
          onClick={onPrevious}
          disabled={currentStep === 1 || totalSteps === 0}
          variant="outline"
          size="sm"
          className="border-slate-600"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        <span className="text-sm text-slate-400">
          Step {totalSteps > 0 ? currentStep : 0} of {totalSteps}
        </span>
        <Button 
          onClick={onNext}
          disabled={currentStep === totalSteps || totalSteps === 0}
          variant="outline"
          size="sm"
          className="border-slate-600"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <Button
        onClick={onReset}
        variant="outline"
        size="sm"
        className="w-full border-2 border-slate-600"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset
      </Button>
    </div>
  </Card>
);