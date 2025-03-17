import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PlayCircle, BookOpen, Coffee, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IntroPageProps {
  onStart: () => void;
}

export const IntroPage = ({ onStart }: IntroPageProps) => {
  const features = [
    {
      icon: <PlayCircle className="h-6 w-6 text-blue-400" />,
      title: "Real-Time Visualization",
      description: "Watch JavaScript code execution unfold step by step in real-time with our interactive visualizer."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-purple-400" />,
      title: "Educational Tool",
      description: "Perfect for learning how JavaScript's event loop, promises, and async operations work under the hood."
    },
    {
      icon: <Coffee className="h-6 w-6 text-yellow-400" />,
      title: "Debug & Learn",
      description: "Understand complex JavaScript concepts by seeing how code executes in the JavaScript runtime environment."
    },
    {
      icon: <Brain className="h-6 w-6 text-green-400" />,
      title: "Interactive Learning",
      description: "Experiment with different code snippets and see how they behave in a controlled environment."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Code2 className="h-20 w-20 text-blue-400" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="h-20 w-20 rounded-full border-2 border-purple-400/20" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"
          >
            JavaScript Execution Visualizer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Understand the JavaScript runtime environment through interactive visualization.
            See how the event loop, call stack, and queues work together in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Button
              onClick={onStart}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Visualizing
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative flex flex-col h-full p-6 bg-slate-800 rounded-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};