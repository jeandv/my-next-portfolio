'use client'

import '../../styles/globals.css';

import { Providers } from '../providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className='bg-gray-50 dark:bg-gray-900'>
        <Providers>
          <main className='flex flex-col justify-center px-8'>

            <Header />

            {children}

            <Footer />

          </main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout;