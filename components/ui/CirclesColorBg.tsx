'use client';

import { motion } from 'framer-motion';

const animation = {
  hide: { opacity: 0, y: -20 },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const CirclesColorBg = () => {
  return (
    <motion.div
      className='darkBackgroundCirclesColors'
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.9 }}
    ></motion.div>
  )
}