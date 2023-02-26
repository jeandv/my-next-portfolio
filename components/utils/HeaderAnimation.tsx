'use client';

import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks';

const animation = {
  hide: { y: -8, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const HeaderAnimation = ({ children }: { children: React.ReactNode; }) => {

  const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

  const scrollPosition = useScrollPosition();

  return (
    <motion.header
      className={classNames(
        scrollPosition > 0 ? 'backdrop-blur-md bg-white/60 dark:bg-black/30' : '',
        'w-full lg:min-w-xs lg:max-w-screen-md rounded-b-3xl sticky top-0 flex flex-col justify-center items-center z-10 transition ease-in-out mx-auto'
      )}
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.header>
  )
}