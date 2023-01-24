import Header from '@/components/Header';
import '../../styles/tailwind.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>

        <Header />

        {children}

        {/* <Footer/> */}

      </body>
    </html>
  )
}

export default RootLayout;