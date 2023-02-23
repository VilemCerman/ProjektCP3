import TopBar from "@/components/TopBar";
import Head from "components/Head";
import { products } from "@/data/MyAmazingDatabase";
import Image from "next/image";
import { useRouter } from "next/router";

;

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
            <Image alt={currentProduct.name} src={`/static/img/shop/${currentProduct.name}.jpg`} fill></Image>

            
        </>
    )
}