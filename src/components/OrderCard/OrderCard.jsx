import PropTypes from 'prop-types'
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const OrderCard = ({ item }) => {
  const { name, image, details, price, _id } = item || {};
  const { user } = useAuth();
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = product => {
    if (user && user.email) {
      const cartItem = {
        orderId: _id, 
        email: user.emial, 
        name,
        image, 
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 2000
          });
        }
      })
    }
    else {
      Swal.fire({
        title: "Please login first",
        text: "Only registered use can add products to card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      });
    }
  }


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
            <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to cart</button>
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