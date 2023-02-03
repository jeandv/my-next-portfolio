import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ButtonTheme } from './';
// import MobileMenuNav from '../MobileMenuNav';
import { useScrollPosition } from '@/utils';
import { NavItemHeaderAnimation } from '@/types';

const animation = {
  hide: { y: -8, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const navItems: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'home',
    x: 1,
    y: -5,
    w: '60px',
  },
  '/about': {
    name: 'about',
    x: 65,
    y: -5,
    w: '60px',
  },
  '/projects': {
    name: 'projects',
    x: 128,
    y: -5,
    w: '78px',
  },
  '/contact': {
    name: 'contact',
    x: 210,
    y: -5,
    w: '75px',
  },
  '/blog': {
    name: 'blog',
    x: 285,
    y: -5,
    w: '53px',
  },
};

export const Header = () => {

  let pathname = usePathname() as string;

  if (pathname.includes('/blog/')) pathname = '/blog';

  const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

  const scrollPosition = useScrollPosition();

  return (
    <motion.header
      className={classNames(
        scrollPosition > 0 ? 'backdrop-blur-md bg-white/60 dark:bg-black/30' : '',
        'w-8/12 rounded-3xl sticky top-0 flex flex-col justify-center px-8 z-10 transition-all duration-300 ease-in-out'
      )}
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.5 }}
    >
      <nav className='flex items-center justify-between w-full relative max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-8 text-gray-900 bg-opacity-60 dark:text-gray-100'>

        <div>
          <h1>
            <Link href='/'>
              <strong>Jeandv</strong>();
            </Link>
          </h1>
        </div>

        <div className='ml-[-0.60rem]'>

          {/* <MobileMenuNav /> */}

          {/* <NavItem href='/' text='Home' />

          <NavItem href='/about' text='About' />

          <NavItem href='/projects' text='Projects' />

          <NavItem href='/contact' text='Contact' />

          <NavItem href='/blog' text='Blog' /> */}

          {
            navItems[pathname] ? (
              <>
                {/* Desktop version, hidden on mobile, animates y axis */}
                <div className='hidden lg:block'>
                  <motion.div
                    className='absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]'
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
            Object.entries(navItems).map(([path, { name }]) => {

              const isActive = path === pathname;

              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'hidden lg:inline-block transition-all ease hover:text-neutral-800 dark:hover:text-neutral-200 py-[2px] px-[10px]',
                    {
                      'text-neutral-500': !isActive,
                      'font-bold': isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })
          }

        </div>

        <ButtonTheme />

      </nav>
    </motion.header>
  )
}