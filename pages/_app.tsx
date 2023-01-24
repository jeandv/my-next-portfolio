import { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default App;