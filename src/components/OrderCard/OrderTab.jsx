import PropTypes from 'prop-types'
import OrderCard from "./OrderCard";

const OrderTab = ({items}) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((item) => (
                <OrderCard key={item._id} item={item}></OrderCard>
              ))}
            </div>
        </>
    );
};

export default OrderTab;

OrderTab.propTypes = {
    items: PropTypes.object
}