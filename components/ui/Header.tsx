import { HeaderAnimation } from '../utils';
import { MobileMenuNav, NavItem, ButtonTheme } from './';

export const Header = () => {
  return (
    <HeaderAnimation>
      <nav className='w-full flex items-center justify-start lg:justify-between flex-row-reverse lg:flex-row relative border-gray-200 dark:border-gray-700 px-5 py-8 sm:pb-8 text-gray-900 bg-opacity-60 dark:text-gray-100 gap-5 lg:gap-0'>

        {/* <div>
          <h1>
            <Link href='/'>
              <strong>Jeandv</strong>();
            </Link>
          </h1>
        </div> */}

        <div className='ml-[-0.80rem]'>

          <MobileMenuNav />

          <NavItem />

        </div>

        <ButtonTheme />

      </nav>
    </HeaderAnimation>
  )
}