import '../../styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;