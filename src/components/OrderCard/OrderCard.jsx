import PropTypes from 'prop-types'
const OrderCard = ({item}) => {
  const { name, image, details, price } = item || {};

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className='bg-gray-700 absolute right-0 mr-4 mt-4 rounded-[3px] px-1 text-white'>${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;

OrderCard.propTypes = {
  item: PropTypes.object
}