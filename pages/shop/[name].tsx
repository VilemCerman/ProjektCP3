import TopBar from "@/components/TopBar";
import Head from "next/head";
import { products } from "@/utility/MyAmazingDatabase";

export default function Home(){
  // TODO - product page

    return(
        <>
            <Head>
                <title>Viktor Instruments - Obchod</title>
                <meta name="description" content="Viktor Instruments - Obchod" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="./static/img/logo.svg" />
            </Head>
            <TopBar/>

            
        </>
    )
}