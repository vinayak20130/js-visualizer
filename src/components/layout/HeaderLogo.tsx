import { motion } from 'framer-motion';
import { Code2, Cpu } from 'lucide-react';

export const HeaderLogo = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
    className="relative mb-8"
  >
    <Code2 className="w-24 h-24 text-blue-400" />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0"
    >
      <Cpu className="w-24 h-24 text-purple-400 opacity-50" />
    </motion.div>
  </motion.div>
);