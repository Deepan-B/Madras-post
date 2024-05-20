import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Services from "../pages/Services.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Stamps from "../pages/Stamps.jsx";
import Schemes from "../pages/Schemes.jsx";
import News from "../pages/News.jsx";
import PostageCalculator from "../pages/PostageCalculator.jsx";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/stamps" element={<Stamps />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/news" element={<News />} />
      <Route path="/postage-calculator" element={<PostageCalculator />} />
      <Route
        path="/postoffice/:id"
        element={
          <ProtectedRoutes allowedRoles={["postoffice", "admin"]}>
            
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
