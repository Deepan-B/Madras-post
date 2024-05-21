/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, allowedRoles }) => {
  const { token, type } = useContext(authContext);
  console.log(type);

  const isAllowed = allowedRoles.includes(type);
  const accessibleRoute =
    token && isAllowed ? children : <Navigate to="/login" replace={true} />;

  return accessibleRoute;
};

export default ProtectedRoutes;
