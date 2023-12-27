import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";

const Products = () => {

    const imgUrl = 'https://i.ibb.co/NsmCb6w/sarah-brown-Cw-Si-AVl-XOWQ-unsplash.jpg'

    return (
        <>
            <Helmet>
                <title>Nightfall | Products </title>
            </Helmet>
            <Cover img={imgUrl}></Cover>
            <h1>Products page here</h1>            
        </>
    );
};

export default Products;