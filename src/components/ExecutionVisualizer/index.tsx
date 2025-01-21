import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExecutionStep } from './ExecutionStep';
import { QueueCard } from './QueueCard';
import { ConsoleOutput } from './ConsoleOutput';
import { ControlPanel } from './ControlPanel';
import { CodeEditor } from './CodeEditor';
import { VisualizerLayout } from './Layout';
import { useExecutionState } from './hooks/useExecutionState';
import { QUEUE_COLORS } from './constants';

const RealTimeExecutionVisualizer = () => {
  const {
    code,
    setCode,
    currentStep,
    currentStepIndex,
    steps,
    error,
    isRunning,
    autoPlay,
    setAutoPlay,
    runCode,
    reset,
    setCurrentStepIndex,
  } = useExecutionState();

  return (
    <VisualizerLayout>
      {error && (
        <div className="col-span-12">
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}
      
      <div className="col-span-12 lg:col-span-8">
        <CodeEditor
          code={code}
          onChange={setCode}
          disabled={isRunning}
        />
      </div>
      
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-2">
        <div className="flex-1">
          <QueueCard
            title="Call Stack"
            items={currentStep.callStack}
            {...QUEUE_COLORS.callStack}
          />
        </div>
        <div className="flex-1">
          <QueueCard
            title="Web API"
            items={currentStep.webApi}
            {...QUEUE_COLORS.webApi}
          />
        </div>
      </div>

      <div className="col-span-12 lg:col-span-8 space-y-2">
        <ConsoleOutput output={currentStep.output} />
        <ExecutionStep step={currentStep.explanation} />
      </div>

      <div className="col-span-12 lg:col-span-4 flex flex-col gap-2">
        <div className="flex-1">
          <QueueCard
            title="Microtask Queue"
            items={currentStep.microtaskQueue}
            {...QUEUE_COLORS.microtaskQueue}
          />
        </div>
        <div className="flex-1">
          <QueueCard
            title="Callback Queue"
            items={currentStep.callbackQueue}
            {...QUEUE_COLORS.callbackQueue}
          />
        </div>
        <ControlPanel
          onRun={runCode}
          onAutoPlay={() => setAutoPlay(!autoPlay)}
          onReset={reset}
          isAutoPlaying={autoPlay}
          disabled={steps.length === 0 || currentStepIndex === steps.length - 1}
          currentStep={currentStepIndex + 1}
          totalSteps={steps.length}
          onPrevious={() => setCurrentStepIndex(prev => Math.max(0, prev - 1))}
          onNext={() => setCurrentStepIndex(prev => Math.min(steps.length - 1, prev + 1))}
        />
      </div>
    </VisualizerLayout>
  );
};

export default RealTimeExecutionVisualizer;