import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      
      <Route
        path="/postoffice/:id"
        element={
          <ProtectedRoutes allowedRoles={["postoffice" , "admin"]}>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/hub/:id"
        element={
          <ProtectedRoutes allowedRoles={["hubofficer" , "admin"]}>
            {/* <Dashboard /> */}
          </ProtectedRoutes>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoutes allowedRoles={["hubofficer" , "admin"]}>
            {/* <Dashboard /> */}
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default routes;
