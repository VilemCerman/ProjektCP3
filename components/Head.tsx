import Head from 'next/head'

export default function VHead(){
    return(
        <Head>
        <title>Viktor Instruments</title>
        <meta name="description" content="Viktor Instruments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        </Head>
    )
}