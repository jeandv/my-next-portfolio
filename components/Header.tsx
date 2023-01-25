'use client';

import NavItem from './NavItem';
import ButtonTheme from './ButtonTheme';

const Header = () => {
  return (
    <header className='flex flex-col justify-center px-8'>
      <nav className='flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100'>

        <div className='ml-[-0.60rem]'>

          <NavItem href='/' text='Home' />

          <NavItem href='/about' text='About' />

          <NavItem href='/projects' text='Projects' />

          <NavItem href='/contact' text='Contact' />

          <NavItem href='/blog' text='Blog' />

        </div>

        <ButtonTheme />

      </nav>
    </header>
  )
}

export default Header;