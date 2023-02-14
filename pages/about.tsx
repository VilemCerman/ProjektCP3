import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import TopBar from '../components/TopBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>O nás</title>
        <meta name="description" content="Viktor Instruments - O nás" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar/>
      <h1>O n8s</h1>
      {/* TODO about page */}

    </>
  )
}
