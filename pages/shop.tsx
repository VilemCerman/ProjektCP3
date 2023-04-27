import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { products } from '@/data/my-amazing-database';

import Head from '../components/head';
import { ProductItem } from '../components/product-item';
import TopBar from '../components/top-bar';

export default function Home() {
  return (
    <>
      <Head></Head>
      <TopBar />

      <Grid sx={{ flexGrow: 1, marginLeft: 5 }} container>
        <Grid item sx={{ paddingLeft: 20 }}>
          <Typography variant="h2" gutterBottom>
            Obchod
          </Typography>
        </Grid>
        <Grid container spacing={2} justifyContent="center" padding={1}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product}></ProductItem>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
