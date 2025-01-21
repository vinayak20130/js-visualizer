import { motion } from 'framer-motion';

export const HeaderContent = () => (
  <>
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
  </>
);