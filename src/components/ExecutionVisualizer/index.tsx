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
      
      {/* Control Panel - at the top on mobile, side panel on desktop */}
      <div className="col-span-12 lg:hidden mb-4">
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

      {/* Main content area - responsive layout */}
      <div className="col-span-12 lg:col-span-8 flex flex-col h-full">
        <div className="flex-grow-0 flex-shrink-0">
          <CodeEditor
            code={code}
            onChange={setCode}
            disabled={isRunning}
          />
        </div>
        <div className="h-[18.8rem] md:h-[15rem] lg:h-[18.8rem] mt-4">
          <ExecutionStep step={currentStep.explanation} />
        </div>
      </div>

      {/* Sidebar - responsive layout */}
      <div className="col-span-12 lg:col-span-4 mt-4 lg:mt-0 space-y-4">
        {/* Control Panel - hidden on mobile, visible on desktop */}
        <div className="hidden lg:block">
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
        
        {/* Queue cards - responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
          <QueueCard
            title="Call Stack"
            items={currentStep.callStack}
            {...QUEUE_COLORS.callStack}
          />
          <QueueCard
            title="Web API"
            items={currentStep.webApi}
            {...QUEUE_COLORS.webApi}
          />
          <QueueCard
            title="Microtask Queue"
            items={currentStep.microtaskQueue}
            {...QUEUE_COLORS.microtaskQueue}
          />
          <QueueCard
            title="Callback Queue"
            items={currentStep.callbackQueue}
            {...QUEUE_COLORS.callbackQueue}
          />
        </div>
      </div>
      
      {/* Console output - always full width */}
      <div className="col-span-12 mt-4">
        <ConsoleOutput output={currentStep.output} />
      </div>
    </VisualizerLayout>
  );
};

export default RealTimeExecutionVisualizer;