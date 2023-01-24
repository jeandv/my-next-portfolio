'use client'

import '../../styles/globals.css';

// import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <ThemeProvider attribute='class'>
    <html>
      <body className='bg-gray-50 dark:bg-gray-900'>
        <main className='flex flex-col justify-center px-8'>

          <Header />

          {children}

          {/* <Footer/> */}
        </main>
      </body>
    </html>
    // </ThemeProvider>
  )
}

export default RootLayout;