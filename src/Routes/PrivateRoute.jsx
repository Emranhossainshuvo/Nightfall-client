import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  // user from the global context api
  const { user, loading } = useAuth();

  const location = useLocation(); 

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from : location}} replace></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
