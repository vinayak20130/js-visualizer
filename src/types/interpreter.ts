export interface ExecutionState {
  callStack: string[];
  webApi: string[];
  callbackQueue: string[];
  microtaskQueue: string[];
  output: string[];
}

export interface ExecutionStep extends ExecutionState {
  explanation: string;
}

export interface Action {
  type: 'push' | 'pop' | 'add' | 'remove';
  item: string;
}