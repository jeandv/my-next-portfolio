'use client'

import { motion } from 'framer-motion';
import { SectionContainer } from '../utils';

const animation = {
  hide: { y: -12, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const ContactSection = () => {

  return (
    <SectionContainer>

      <motion.div
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
      >
        <h2 className='font-bold text-4xl md:text-5xl tracking-tight mb-8 text-black dark:text-white text-center'>
          Contact me
        </h2>
      </motion.div>

    </SectionContainer>
  )
}