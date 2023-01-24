'use client'

import Header from '@/components/Header';
import '../../styles/tailwind.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className='bg-gray-50 dark:bg-gray-900'>
        <main className='flex flex-col justify-center px-8'>

          <Header />

          {children}

          {/* <Footer/> */}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;