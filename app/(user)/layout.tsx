import '../../styles/globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className='bg-gray-900 transition ease'>

        <Header />

        <main className='min-w-xs max-w-screen-md flex flex-col justify-center items-center mx-auto'>

          {children}

        </main>

        <Footer />

      </body>
    </html>
  )
}

export default RootLayout;