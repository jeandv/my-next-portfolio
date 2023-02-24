'use client';

import { ThemeProvider } from 'next-themes';
import { Inter } from '@next/font/google';

const interVariable = Inter();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class'>
      <main className={interVariable.className + ' min-w-xs max-w-screen-md flex flex-col justify-center items-center mx-auto'}>
        {children}
      </main>
    </ThemeProvider >
  )
} 