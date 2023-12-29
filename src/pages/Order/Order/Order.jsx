import Cover from "../../shared/Cover/Cover";

const Order = () => {
  const orderCover =
    "https://i.ibb.co/bX5c3Pk/online-fashion-shopping-with-laptop.jpg";

  return (
    <>
      <Cover img={orderCover} title={"E-commerce king"}></Cover>
      <div role="tablist" className="tabs tabs-bordered">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>
    </>
  );
};

export default Order;
