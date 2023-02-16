import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import TopBar from '../components/TopBar'
import Head from '../components/Head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head></Head>
      <TopBar/>
      <h1>O n8s</h1>
      {/* TODO about page */}

    </>
  )
}
