import Link from 'next/link';
import { motion } from 'framer-motion';
// import NavItem from './NavItem';
import { usePathname } from 'next/navigation';
import ButtonTheme from './ButtonTheme';
// import MobileMenuNav from './MobileMenuNav';
import clsx from 'clsx';

const animation = {
  hide: { y: -8, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

interface NavItem {
  name: string;
  x: number;
  y: number;
  w: string;
}

const navItems: { [key: string]: NavItem } = {
  '/': {
    name: 'home',
    x: 0,
    y: 0,
    w: '64px',
  },
  '/about': {
    name: 'about',
    x: 94,
    y: 20,
    w: '65px',
  },
  '/blog': {
    name: 'blog',
    x: 127,
    y: 69,
    w: '56px',
  },
  '/guestbook': {
    name: 'guestbook',
    x: 182,
    y: 104,
    w: '100px',
  },
};

const Header = () => {

  let pathname = usePathname() as string;

  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <motion.header
      className='flex flex-col justify-center px-8'
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.5 }}
    >
      <nav className='flex items-center justify-between w-full relative max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-opacity-60 dark:text-gray-100'>

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

          {navItems[pathname] ? (
            <>
              {/* Desktop version, hidden on mobile, animates y axis */}
              <div className="hidden md:block">
                <motion.div
                  className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                  layoutId="test2"
                  initial={{ opacity: 0, y: navItems[pathname].y }}
                  animate={{
                    opacity: 1,
                    y: navItems[pathname].y,
                    width: navItems[pathname].w,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              </div>
              {/* Mobile version, hidden on desktop, animates x axis */}
              <div className="block md:hidden">
                <motion.div
                  className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                  layoutId="test"
                  initial={{ opacity: 0, x: navItems[pathname].x }}
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

          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;

            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]',
                  {
                    'text-neutral-500': !isActive,
                    'font-bold': isActive,
                  }
                )}
              >
                {name}
              </Link>
            );
          })}

        </div>

        <ButtonTheme />

      </nav>
    </motion.header>
  )
}

export default Header;