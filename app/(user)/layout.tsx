'use client'

import '../../styles/globals.css';

import { motion } from 'framer-motion';
import { Providers } from '../providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const animation = {
  hide: { opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className='bg-gray-50 dark:bg-gray-900'>
        <Providers>

          <motion.div
            className='backgroundCirclesColors'
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.8 }}
          ></motion.div>

          <Header />

          {children}

          <Footer />

        </Providers>
      </body>
    </html>
  )
}

export default RootLayout;