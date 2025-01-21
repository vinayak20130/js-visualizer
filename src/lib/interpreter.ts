import { ExecutionState, ExecutionStep, Action } from '@/types/interpreter';

export const createInterpreter = () => {
  const steps: ExecutionStep[] = [];
  const state: ExecutionState = {
    callStack: [],
    webApi: [],
    callbackQueue: [],
    microtaskQueue: [],
    output: []
  };

  const addStep = (explanation: string) => {
    steps.push({
      callStack: [...state.callStack],
      webApi: [...state.webApi],
      callbackQueue: [...state.callbackQueue],
      microtaskQueue: [...state.microtaskQueue],
      output: [...state.output],
      explanation
    });
  };

  const trackExecution = (location: 'stack' | 'microtask', action: Action) => {
    if (location === 'stack') {
      if (action.type === 'push') {
        state.callStack.push(action.item);
        addStep(`Added "${action.item}" to the call stack`);
      } else {
        state.callStack.pop();
        addStep(`Removed "${action.item}" from the call stack`);
      }
    } else if (location === 'microtask') {
      if (action.type === 'add') {
        state.microtaskQueue.push(action.item);
        addStep(`Added "${action.item}" to the microtask queue`);
      } else {
        const index = state.microtaskQueue.indexOf(action.item);
        if (index > -1) {
          state.microtaskQueue.splice(index, 1);
          addStep(`Processed "${action.item}" from microtask queue`);
        }
      }
    }
  };

  const safeConsole = {
    log: (...args: any[]) => {
      const logMessage = args.join(' ');
      trackExecution('stack', { type: 'push', item: `console.log("${logMessage}")` });
      state.output.push(logMessage);
      addStep(`Console logged: "${logMessage}"`);
      trackExecution('stack', { type: 'pop', item: `console.log("${logMessage}")` });
    }
  };

  class SafePromise {
    constructor(executor: (resolve: () => void, reject: (reason?: any) => void) => void) {
      trackExecution('stack', { type: 'push', item: 'new Promise()' });
      
      let isPending = true;
      let isRejected = false;
      let rejectValue: any = null;

      const handleReject = (reason: any) => {
        if (!isPending) return;
        isPending = false;
        isRejected = true;
        rejectValue = reason;
        trackExecution('microtask', { type: 'add', item: 'Promise Rejection' });
      };

      try {
        executor(
          () => {
            trackExecution('microtask', { type: 'add', item: 'Promise Resolution' });
          },
          handleReject
        );
      } catch (error) {
        handleReject(error);
      }

      this.then = (onFulfilled?: any, onRejected?: any) => {
        return new SafePromise((resolve, reject) => {
          if (isRejected && onRejected) {
            trackExecution('microtask', { type: 'add', item: 'Promise Catch Handler' });
            setTimeout(() => {
              try {
                onRejected(rejectValue);
              } catch (error) {
                reject(error);
              }
              trackExecution('microtask', { type: 'remove', item: 'Promise Catch Handler' });
            }, 0);
          }
        });
      };

      this.catch = (onRejected: any) => {
        return this.then(null, onRejected);
      };

      trackExecution('stack', { type: 'pop', item: 'new Promise()' });
    }
  }

  const parseAndExecute = async (code: string) => {
    addStep("Initial state - Program execution begins");

    try {
      const context = `
        const console = { log: safeConsole.log };
        const Promise = SafePromise;
        ${code}
      `;

      await new Function(
        'safeConsole',
        'SafePromise',
        context
      )(safeConsole, SafePromise);

      return { steps, error: null };
    } catch (error: any) {
      return { steps, error: error.message };
    }
  };

  return { parseAndExecute };
};