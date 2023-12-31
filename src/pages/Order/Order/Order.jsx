import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import OrderTab from "../../../components/OrderCard/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const orderCover =
    "https://i.ibb.co/bX5c3Pk/online-fashion-shopping-with-laptop.jpg";
    
    const categories = ['pigments', 'brushes', 'sketchbooks', 'crafting', 'canvas', 'sculpture']
    const {category} = useParams(); 
    const initialIndex = categories.indexOf(category); 

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [products] = useProducts();

  const pigments = products.filter((item) => item.category === "pigments");
  const brushes = products.filter((item) => item.category === "brushes");
  const sketchbooks = products.filter(
    (item) => item.category === "sketchbooks"
  );
  const crafting = products.filter((item) => item.category === "crafting");
  const canvas = products.filter((item) => item.category === "canvas");
  const sculpture = products.filter((item) => item.category === "sculpture");

  return (
    <>
      <Cover img={orderCover} title={"E-commerce king"}></Cover>
      <>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex mb-4">
            <Tab className="py-2 px-4 hover:cursor-pointer text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:border-gray-800 active:text-gray-800 active:border-gray-800 border-b-2 border-transparent">
              Pigments
            </Tab>
            <Tab className="py-2 hover:cursor-pointer px-4 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:border-gray-800 active:text-gray-800 active:border-gray-800 border-b-2 border-transparent">
              Brushes
            </Tab>
            <Tab className="py-2 hover:cursor-pointer px-4 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:border-gray-800 active:text-gray-800 active:border-gray-800 border-b-2 border-transparent">
              Sketchbooks
            </Tab>
            <Tab className="py-2 hover:cursor-pointer px-4 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:border-gray-800 active:text-gray-800 active:border-gray-800 border-b-2 border-transparent">
              Crafting
            </Tab>
            <Tab className="py-2 hover:cursor-pointer px-4 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:border-gray-800 active:text-gray-800 active:border-gray-800 border-b-2 border-transparent">
              Canvas
            </Tab>
            <Tab className="py-2 hover:cursor-pointer px-4 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:border-gray-800 active:text-gray-800 active:border-gray-800 border-b-2 border-transparent">
              Sculpture
            </Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={pigments} heading={'Pigments'}></OrderTab>
          </TabPanel>
          <TabPanel><OrderTab items={brushes} heading={'Brushes'}></OrderTab></TabPanel>
          <TabPanel><OrderTab items={sketchbooks} heading={'Sketchbooks'}></OrderTab></TabPanel>
          <TabPanel><OrderTab items={crafting} heading={'Crafting'}></OrderTab></TabPanel>
          <TabPanel><OrderTab items={canvas} heading={'Canvas'}></OrderTab></TabPanel>
          <TabPanel><OrderTab items={sculpture} heading={'Sculpture'}></OrderTab></TabPanel>
        </Tabs>
      </>
    </>
  );
};

export default Order;
