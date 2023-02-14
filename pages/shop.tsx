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



const inter = Inter({ subsets: ['latin'] })

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//TODO database

export const products : Array<Product> =[
  {id: 1,name: "Sitol", price: 50, description: "toto je popis sitolu. nevim co dal bzch sem napsal. Pomoc damy a panove"},
  {id: 2,name: "Trubka", price: 30000, description: "toto je popis trubkz. porat nevim co sem mam napsat"},
  {id: 3,name: "Kontrafagot", price: 250000, description: ""},
  {id: 4,name: "Tuba", price: 100000, description: ""},
]


export default function Home() {
  return (
    <>
      <Head>
        <title>Viktor Instruments - Obchod</title>
        <meta name="description" content="Viktor Instruments - Obchod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./static/img/logo.svg" />
      </Head>
      <TopBar/>
      <Typography variant="h2" gutterBottom>Obchod</Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent='center'>
          {products.map((product) => <ProductItem key={product.id} product={product}></ProductItem>)}
        </Grid>
      </Box>
      
    </>
  )
}
