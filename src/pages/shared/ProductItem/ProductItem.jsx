import PropType from 'prop-types'
const ProductItem = ({item}) => {

    const {name, image, details, price} = item || {}; 

    return (
        <>
            <div className="card  card-compack p-2 bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
            <div className="card-actions justify-center">
              <button className="btn bg-[#FFD1D1] hover:bg-[#FFE3E1]">${price}</button>
            </div>
          </div>
        </div>
        </>
    );
};

ProductItem.propTypes = {
    item: PropType.object
}

export default ProductItem;
