import Head from 'next/head';

// eslint-disable-next-line import/no-default-export
export default function head() {
  return (
    <Head>
      <title>Viktor Instruments</title>
      <meta name="description" content="Viktor Instruments" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.svg" />
    </Head>
  );
}
