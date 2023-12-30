// import Swiper from "swiper";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BrainDevelopment from "../BrainDevelopment/BrainDevelopment";
import Category from "../Category/Category";
import FollowUs from "../FollowUs/FollowUs";
import NewArrival from "../NewArrival/NewArrival";
import Varities from "../Varities/Varities";

const Home = () => {
    return (
        <>
        <Helmet>
            <title>
                Nightfall | Home
            </title>
        </Helmet>
            <Banner />
            <Varities></Varities>
            <Category></Category>
            <NewArrival></NewArrival>
            <BrainDevelopment></BrainDevelopment>
            <FollowUs></FollowUs>
        </>
    );
};

export default Home;