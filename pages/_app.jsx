import '@/styles/index.css';
import '@splidejs/react-splide/css/skyblue';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hubs Tools</title>
        <meta name='description' content='hubs-tools ' />
        <meta property='og:title' content='hubs-tools' />
        <meta
          property='og:image'
          content='https://firebasestorage.googleapis.com/v0/b/hubs-tools-9e4ea.appspot.com/o/logo.png?alt=media&token=b0ae5263-3349-4813-b776-6ea8917b3a8d'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
