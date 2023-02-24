'use client'

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/utils';

const animation = {
  hide: { y: -12, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const Blog = () => (
  <SectionContainer>

    <div className='w-full flex flex-col gap-6'>

      <motion.div
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
      >
        <h2 className='font-bold text-4xl md:text-5xl tracking-tight mb-8 text-black dark:text-white text-center'>
          Blog
        </h2>
      </motion.div>

    </div>

  </SectionContainer>
);

export default Blog;