import Head from 'next/head';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('./components/ThreeScene'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Three.js com Next</title>
      </Head>
      <main>
        <ThreeScene />
      </main>
    </>
  );
}
