'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LinksNav, navItems } from './';

export const NavItem = () => {

  let pathname = usePathname() as string;

  if (pathname.includes('/blog/')) pathname = '/blog';

  return (
    <>
      {
        navItems[pathname] ? (
          <>
            <div className='hidden lg:block'>
              <motion.div
                className='absolute bg-neutral-200 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]'
                layoutId='test2'
                initial={{ opacity: 0, x: navItems[pathname].x, y: navItems[pathname].y }}
                animate={{
                  opacity: 1,
                  x: navItems[pathname].x,
                  width: navItems[pathname].w,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
              />
            </div>
          </>
        ) : null}

      {

        <LinksNav />

      }
    </>
  );
}