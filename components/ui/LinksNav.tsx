import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NavItemHeaderAnimation } from '@/types';

export const navItemsSelected: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'home',
    x: 1,
    y: -3,
    w: '60px',
  },
  '/about': {
    name: 'about',
    x: 65,
    y: -3,
    w: '60px',
  },
  '/projects': {
    name: 'projects',
    x: 127,
    y: -3,
    w: '70px',
  },
  '/blog': {
    name: 'blog',
    x: 203,
    y: -3,
    w: '45px',
  },
};

const LinksNav = () => {

  let pathname = usePathname() as string;
  return (
    <>
      {
        Object.entries(navItemsSelected).map(([path, { name }]) => {

          const isActive = path === pathname;

          return (
            <Link
              key={path}
              href={path}
              className={clsx(
                'hidden lg:inline-block transition ease hover:text-neutral-200 py-[2px] px-[10px]',
                {
                  'text-neutral-500': !isActive,
                  'font-bold': isActive,
                }
              )}>

              {name}

            </Link>
          )
        })
      }
    </>
  )
}

export default LinksNav;