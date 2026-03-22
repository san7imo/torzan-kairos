import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type RevealProps = PropsWithChildren<{
  delay?: number;
  y?: number;
  className?: string;
  amount?: number;
}>;

export function Reveal({ children, className, delay = 0, y = 28, amount = 0.18 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
