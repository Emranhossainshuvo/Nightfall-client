import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const Order = () => {
  const orderCover =
    "https://i.ibb.co/bX5c3Pk/online-fashion-shopping-with-laptop.jpg";

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Cover img={orderCover} title={"E-commerce king"}></Cover>
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
        <TabPanel>{/* Content for Tab 1 */}</TabPanel>
        <TabPanel>{/* Content for Tab 1 */}</TabPanel>
        <TabPanel>{/* Content for Tab 1 */}</TabPanel>
        <TabPanel>{/* Content for Tab 1 */}</TabPanel>
        <TabPanel>{/* Content for Tab 1 */}</TabPanel>
        <TabPanel>{/* Content for Tab 2 */}</TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
