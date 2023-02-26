'use client';

import '../../styles/globals.css';
import { Providers } from '../providers';
import { Header, Footer } from '@/components/ui';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className='bg-gray-50 dark:bg-gray-900 transition ease'>
        <Providers>

          <Header />

          {children}

          <Footer />

        </Providers>
      </body>
    </html>
  )
}

export default RootLayout;