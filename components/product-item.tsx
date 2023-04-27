import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { FC } from 'react';

import { Product } from '../types';

type Props = {
  product: Product;
};

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const product: FC<Props> = (props: Props) => {
  const {
    product: { id, name, price },
  } = props;
  return (
    <Grid item>
      <Paper
        elevation={4}
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 200,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container flexDirection="column">
          <Link href={`/shop/${id}`}>
            <Grid item>
              <Img alt={name} src={`/static/img/shop/${name}.jpg`} />
            </Grid>
            <Grid item>
              <h3>{name}</h3>
            </Grid>
            <Grid item>
              <p>{price} Kč</p>
            </Grid>
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
};
