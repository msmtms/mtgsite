import type { AppProps } from 'next/app'
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import localFont from 'next/font/local';

const Mplantin = localFont({ src: 'fonts/Mplantin.ttf' });

Amplify.configure({ ...awsExports } as any, { ssr: true });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <main className={Mplantin.className}>
        <Component {...pageProps} />
      </main>
  );
}
