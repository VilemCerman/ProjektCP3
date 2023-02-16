import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import TopBar from '../components/TopBar'
import { Typography } from '@mui/material'
import Head from '../components/Head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head></Head>
      <TopBar/>
      {/* TODO  home page*/}

      <Typography variant='h2'>VÍTEJTE!</Typography>
      <Typography variant='h5'>Proč pořídit dechový nástroj či příslušenství u Viktor Instruments?</Typography>
      <Typography variant='body1'>
        - poštovné již od 59CZK! <br />
        - největší množství nástrojů ihned skladem v ČR! <br />
        - nadprůměrná servisní podpora!<br />
        - nejrozsáhlejší servisní zázemí v ČR!<br />
        - vlastní lakovna pro povrchové úpravy!<br />
        - respektovaný ryze český výrobce!<br />
        - stále férové ceny! - rychlost dodání!<br />
      </Typography>

    </>
  )
}
