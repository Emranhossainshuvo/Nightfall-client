import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // log out functionality implementation
  const handleLogOut = () => {
      logOut()
      .then(() => {})
      .catch(error => {
        console.log(error)
      })
  }

  const navoptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/order/pigments">Order online</Link>
      </li>

      {user ? (
        <>
        <span>{user?.displayName}</span>
        <button onClick={handleLogOut} className="btn btn-neutral">Log out</button>
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
          <a className="btn ">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
