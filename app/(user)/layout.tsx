'use client'

import '../../styles/globals.css';

// import { motion } from 'framer-motion';
import { Providers } from '../providers';
import { Header, Footer } from '@/components/ui';

// const animation = {
//   hide: { opacity: 0, y: -20 },
//   show: {
//     y: 0,
//     opacity: 1,
//   },
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html>
      <body className='bg-gray-50 dark:bg-gray-900 transition ease'>
        <Providers>

          {/* <motion.div
            className='darkBackgroundCirclesColors'
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.9 }}
          ></motion.div> */}

          <Header />

          {children}

          <Footer />

        </Providers>
      </body>
    </html>
  )
}

export default RootLayout;