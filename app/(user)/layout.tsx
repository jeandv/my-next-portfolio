import '../../styles/globals.css';
import clsx from 'clsx';
import local from 'next/font/local';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Head from '../head';

const graphik = local({
  src: [
    {
      path: '../../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang='en'
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#1a1a1a]',
        graphik.variable
      )}
    >
      <Head />
      <body className='transition ease'>
        <Header />
        <main className='flex flex-col justify-center items-center mx-auto'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;
