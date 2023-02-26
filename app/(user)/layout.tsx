'use client';

import '../../styles/globals.css';
import { Providers } from '../providers';
import { Inter } from '@next/font/google';
import { Header, Footer } from '@/components/ui';

const interVariable = Inter();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className='bg-gray-50 dark:bg-gray-900 transition ease'>

        <Providers>

          <Header />

          <main className={interVariable.className + ' min-w-xs max-w-screen-md flex flex-col justify-center items-center mx-auto'}>

            {children}

          </main>

          <Footer />

        </Providers>

      </body>
    </html>
  )
}

export default RootLayout;