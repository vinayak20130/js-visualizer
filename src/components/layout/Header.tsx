import { motion } from 'framer-motion';
import { Code2, Cpu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onStart: () => void;
}

export const Header = ({ onStart }: HeaderProps) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="relative w-screen h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
  >
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
    </div>
    
    <div className="relative h-full flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="relative mb-8 group"
      >
        <Code2 className="w-24 h-24 text-blue-400 transition-transform group-hover:scale-110" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <Cpu className="w-24 h-24 text-purple-400 opacity-50" />
        </motion.div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"
      >
        JavaScript Execution Visualizer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-xl md:text-2xl text-slate-300 text-center max-w-2xl mb-12"
      >
        Understand the JavaScript runtime environment through interactive visualization
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
        <Button
          size="lg"
          onClick={onStart}
          className="group relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-8 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Start Visualizing
          <ArrowRight className="ml-2 w-6 h-6 inline-block transition-transform group-hover:translate-x-1" />
        </Button>
        
        <span className="text-slate-400 text-sm">
          Interactive visualization of JavaScript execution context
        </span>
      </motion.div>
    </div>
  </motion.div>
);