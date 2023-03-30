import TopBar from "@/components/TopBar";
import Head from "components/Head";
import { products } from "@/data/MyAmazingDatabase";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";


export default function Home(){
    //TODO - product page

    const {query} = useRouter();    
    const currentId = Number(query.id);
    const currentProduct = products.find(product => product.id === currentId)
    if(!currentProduct) {throw new Error('Not found')}

    return(
        <>
            <Head></Head>
            <TopBar/>
            <Grid container flexDirection="column" alignItems={"center"}>
                <Grid item>
                    <Typography variant="h1">{currentProduct.name}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5">Cena: {currentProduct.price} Kč</Typography>
                </Grid>
                <Grid item>
                    <Typography>{currentProduct.description}</Typography>
                </Grid>
                {/* <Grid item maxWidth="200" maxHeight="200">
                    <Image alt={currentProduct.name} src={`/static/img/shop/${currentProduct.name}.jpg`} width="200" height="200"></Image>
                </Grid> */}
            </Grid>

            
        </>
    )
}