'use client';

import { ThemeProvider } from 'next-themes';
import { Inter } from '@next/font/google';

const interVariable = Inter();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class'>
      <main className={interVariable.className}>
        {children}
      </main>
    </ThemeProvider>
  )
} 