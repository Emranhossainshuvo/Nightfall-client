import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import useProducts from "../../../Hooks/useProducts";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductsCategory from "../ProductsCategory/ProductsCategory";


const Products = () => {
    const imgUrl = 'https://i.ibb.co/NsmCb6w/sarah-brown-Cw-Si-AVl-XOWQ-unsplash.jpg'
    const brushURL = 'https://i.ibb.co/LrzYwPT/various-brushes.jpg'
    const sketchbookURL = 'https://i.ibb.co/L5mGpnY/top-view-notebook-with-watercolor-macarons.jpg'
    const craftURL = 'https://i.ibb.co/LxXtSQc/colorful-different-scrapbook-card-with-decorative-elements.jpg'
    const canvasURL = 'https://i.ibb.co/1qnJtNZ/blank-white-frame-with-pink-border-colored-pencils-glass-wooden-desk.jpg'
    const sculptureURL = 'https://i.ibb.co/Qm4bPSd/beautiful-roman-figure-carving.jpg'

    const [products] = useProducts(); 
    const pigments = products.filter(item => item.category === 'pigments')
    const brushes = products.filter(item => item.category === 'brushes')
    const sketchbooks = products.filter(item => item.category === 'sketchbooks')
    const crafting = products.filter(item => item.category === 'crafting')
    const canvas = products.filter(item => item.category === 'canvas')
    const sculpture = products.filter(item => item.category === 'sculpture')
    

    return (
        <>
            <Helmet>
                <title>Nightfall | Products </title>
            </Helmet>
            <Cover img={imgUrl} title={'All products'}></Cover>
            {/* main cover */}
            {/* Pigments section */}
            <ProductsCategory items={pigments} heading={"pigments"}></ProductsCategory>
            {/* brushe menu items */}
            {/* <SectionTitle heading={'Brushes'}></SectionTitle> */}
            <ProductsCategory items={brushes} title={'brushes'} heading={"brushes"} coverImg={brushURL}></ProductsCategory>
            {/* sketchbooks menu items */}
            <ProductsCategory items={sketchbooks} title={'sketchbooks'} heading={"sketchbooks"} coverImg={sketchbookURL}></ProductsCategory>
            {/* crafting menu items */}
            <ProductsCategory items={crafting} title={'Crafting'} heading={"crafting"} coverImg={craftURL}></ProductsCategory>
            {/* canvas menu items */}
            <ProductsCategory items={canvas} title={'Canvas'} heading={"canvas"} coverImg={canvasURL}></ProductsCategory>
            {/* sculpture menu items */}
            <ProductsCategory items={sculpture} title={'Sculpture'} coverImg={sculptureURL} heading={'Sculpture'}></ProductsCategory>
        </>
    );
};

export default Products;