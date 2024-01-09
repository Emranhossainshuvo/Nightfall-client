import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  // console.log(cart.length)

  // log out functionality implementation
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  };

  const navoptions = (
    <>
      <li>
        <Link className="hover:btn hover:btn-sm" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:btn hover:btn-sm" to="/products">
          Products
        </Link>
      </li>
      <li>
        <Link className="hover:btn hover:btn-sm" to="/order/pigments">
          Order online
        </Link>
      </li>

      {user ? (
        <>
          <button onClick={handleLogOut} className="hover:btn hover:btn-sm">
            Log out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-2xl bg-opacity-35 text-[#FFF5E4] rounded-md bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navoptions}
            </ul>
          </div>
          <a>
            <span className="text-xl font-bold">Nightfall</span> <br />{" "}
            <span>Art supplies</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navoptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="avatar">
                <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                  {cart.length} 
                </span>
              <div className="w-14 rounded-full ring ring-primary bg-pink-700 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
          ) : (
            <Link to="/signup">
              <img
                src="https://i.ibb.co/xzWmCqC/icons8-login-50.png"
                alt=""
              />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
