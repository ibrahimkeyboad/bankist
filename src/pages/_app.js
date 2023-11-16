import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import Head from 'next/head';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <link rel='shortcut icon' type='image/png' href='/img/icon.png' />

        <title>Bankist | When Banking meets Minimalist</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
