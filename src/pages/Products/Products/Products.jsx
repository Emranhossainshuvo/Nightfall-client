import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import NewArrival from "../../Home/NewArrival/NewArrival";

const Products = () => {

    const imgUrl = 'https://i.ibb.co/NsmCb6w/sarah-brown-Cw-Si-AVl-XOWQ-unsplash.jpg'

    return (
        <>
            <Helmet>
                <title>Nightfall | Products </title>
            </Helmet>
            <Cover img={imgUrl} title={'All products'}></Cover>
            
        </>
    );
};

export default Products;