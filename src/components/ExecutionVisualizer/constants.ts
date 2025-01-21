export const DEFAULT_CODE = `// Example with async/await and error handling
async function withAsyncAwait() {
  try {
    let promise = new Promise((resolve, reject) => {
      reject("Hello World");
    });
    await promise;
  } catch (error) {
    console.log("In the Error Block:", error);
  }
}

withAsyncAwait();`;

export const QUEUE_COLORS = {
  callStack: {
    text: 'text-blue-300',
    bg: 'bg-blue-950/30',
    border: 'border-blue-800/30',
  },
  webApi: {
    text: 'text-yellow-300',
    bg: 'bg-yellow-950/30',
    border: 'border-yellow-800/30',
  },
  microtaskQueue: {
    text: 'text-purple-300',
    bg: 'bg-purple-950/30',
    border: 'border-purple-800/30',
  },
  callbackQueue: {
    text: 'text-green-300',
    bg: 'bg-green-950/30',
    border: 'border-green-800/30',
  },
} as const;