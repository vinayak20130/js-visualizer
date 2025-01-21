import React from 'react';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

interface QueueCardProps {
  title: string;
  items: string[];
  color: string;
  bgColor: string;
  borderColor: string;
}

export const QueueCard: React.FC<QueueCardProps> = ({
  title,
  items,
  color,
  bgColor,
  borderColor
}) => (
  <Card className="h-full backdrop-blur-sm bg-slate-800/50 border-2 border-slate-700/50">
    <div className="p-4 h-full flex flex-col">
      <h3 className={`font-medium mb-2 ${color}`}>{title}</h3>
      <div className="flex-1 rounded-lg bg-slate-900/50 p-2 min-h-[100px]">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.div
              key={item + i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className={`p-2 mb-1 ${bgColor} rounded-md text-sm ${borderColor} border backdrop-blur-sm`}
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  </Card>
);