'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const ButtonTheme = () => {

  const [changeTheme, setChangeTheme] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setChangeTheme(true), []);

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='group w-9 h-9 bg-dark rounded-lg bg-white dark:bg-black ring-1 ring-gray-200 hover:ring-black dark:ring-gray-700 dark:hover:ring-white text-gray-300 group-hover:text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-200 flex items-center justify-center transition ease'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {changeTheme && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          enableBackground='accumulate'
          className='w-5 h-5 text-gray-300 group-hover:text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-200 transition ease'
        >
          {resolvedTheme === 'dark' ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
            />
          )}
        </svg>
      )}
    </button>
  )
}