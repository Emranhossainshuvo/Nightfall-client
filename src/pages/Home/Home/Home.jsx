// import Swiper from "swiper";
import Banner from "../Banner/Banner";
import BrainDevelopment from "../BrainDevelopment/BrainDevelopment";
import Category from "../Category/Category";
import FollowUs from "../FollowUs/FollowUs";
import NewArrival from "../NewArrival/NewArrival";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category></Category>
            <NewArrival></NewArrival>
            <BrainDevelopment></BrainDevelopment>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;