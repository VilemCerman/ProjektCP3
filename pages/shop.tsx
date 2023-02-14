import Head from 'next/head'
import Image from 'next/image'
import { Basic, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import TopBar from '../components/TopBar'
import ComplexGrid from '../components/ComplexGrid'
import BasicGrid from '../components/BasicGrid'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material'
import { Product } from '@/types'
import {ProductItem} from '../components/ProductItem';
import { products } from '@/utility/MyAmazingDatabase'

export default function Home() {
  return (
    <>
      <Head>
        <title>Obchod</title>
        <meta name="description" content="Viktor Instruments - Obchod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./static/img/logo.svg" />
      </Head>
      <TopBar/>
      <Typography variant="h2" gutterBottom>Obchod</Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent='center' padding={1}>
          {products.map((product) => <ProductItem key={product.id} product={product}></ProductItem>)}
        </Grid>
      </Box>
      
    </>
  )
}
