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
import Head from '../components/Head'

export default function Home() {
  return (
    <>
      <Head></Head>
      <TopBar/>

      <Grid sx={{ flexGrow: 1, marginLeft: 5}} container>
        <Grid item sx={{paddingLeft:20}}>
          <Typography variant="h2" gutterBottom>Obchod</Typography>
        </Grid>
        <Grid container spacing={2} justifyContent='center' padding={1}>
          {products.map((product) => <ProductItem key={product.id} product={product}></ProductItem>)}
        </Grid>
      </Grid>
      
    </>
  )
}
