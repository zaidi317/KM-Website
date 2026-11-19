import React from 'react';
import { motion } from 'motion/react';

const SETTLE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Subtle, purposeful scroll-triggered entrance animation using compositor-only
 * properties (opacity + transform). Respects MotionConfig reducedMotion="user".
 */
export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.45, delay, ease: SETTLE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface RevealStaggerProps {
  children: React.ReactNode;
  className?: string;
  immediate?: boolean;
}

export const RevealStagger: React.FC<RevealStaggerProps> = ({
  children,
  className = '',
  immediate = false,
}) => {
  if (immediate) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: SETTLE_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
