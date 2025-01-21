import { useState, useEffect } from 'react';
import { createInterpreter } from '@/lib/interpreter';
import type { ExecutionStep } from '@/types/interpreter';
import { DEFAULT_CODE } from '../constants';

export const useExecutionState = () => {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [steps, setSteps] = useState<ExecutionStep[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay && currentStepIndex < steps.length - 1) {
      interval = setInterval(() => {
        setCurrentStepIndex(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, currentStepIndex, steps.length]);

  const reset = () => {
    setSteps([]);
    setCurrentStepIndex(0);
    setError(null);
    setIsRunning(false);
    setAutoPlay(false);
  };

  const runCode = async () => {
    reset();
    setIsRunning(true);
    
    const interpreter = createInterpreter();
    const { steps: executionSteps, error } = await interpreter.parseAndExecute(code);
    
    if (error) {
      setError(error);
    } else {
      setSteps(executionSteps);
    }
    
    setIsRunning(false);
  };

  const currentStep = steps[currentStepIndex] || {
    callStack: [],
    webApi: [],
    callbackQueue: [],
    microtaskQueue: [],
    output: [],
    explanation: "No execution steps yet"
  };

  return {
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
  };
};