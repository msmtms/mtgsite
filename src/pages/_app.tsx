import type { AppProps } from 'next/app'
import localFont from 'next/font/local';

const Mplantin = localFont({ src: 'fonts/Mplantin.ttf' });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <main className={Mplantin.className}>
        <Component {...pageProps} />
      </main>
  );
}
