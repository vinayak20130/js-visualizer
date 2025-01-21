import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { MainLayout } from '@/components/layout/MainLayout';
import { IntroPage } from '@/components/layout/IntroPage';
import { motion, AnimatePresence } from 'framer-motion';
import RealTimeExecutionVisualizer from '@/components/ExecutionVisualizer';

function App() {
  const [showVisualizer, setShowVisualizer] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <AnimatePresence mode="wait">
          {!showVisualizer ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-screen h-screen"
            >
              <IntroPage onStart={() => setShowVisualizer(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="visualizer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-screen h-screen"
            >
              <RealTimeExecutionVisualizer />
            </motion.div>
          )}
        </AnimatePresence>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;