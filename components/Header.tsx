import Link from 'next/link';
import { motion } from 'framer-motion';
import NavItem from './NavItem';
import ButtonTheme from './ButtonTheme';
import MobileMenuNav from './MobileMenuNav';

const animation = {
  hide: { y: -8, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const Header = () => {
  return (
    <motion.header
      className='flex flex-col justify-center px-8'
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.5 }}
    >
      <nav className='flex items-center justify-between w-full relative max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100'>

        <div>
          <h1>
            <Link href='/'>
              <strong>Jeandv</strong>();
            </Link>
          </h1>
        </div>

        <div className='ml-[-0.60rem]'>

          <MobileMenuNav />

          <NavItem href='/' text='Home' />

          <NavItem href='/about' text='About' />

          <NavItem href='/projects' text='Projects' />

          <NavItem href='/contact' text='Contact' />

          <NavItem href='/blog' text='Blog' />

        </div>

        <ButtonTheme />

      </nav>
    </motion.header>
  )
}

export default Header;