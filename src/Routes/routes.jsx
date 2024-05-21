import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import Login from "../pages/Login.jsx";
import Findpost from "../pages/Findpost.jsx";
import Findpin from "../pages/Findpin.jsx";

import ParcelUpdate from "../pages/ParcelUpdate.jsx";
import PODashboard from "../pages/PODashboard.jsx";
import { CopyNGo } from "../pages/CopyNGo.jsx";
import Dynamo from "../pages/DynamoTable.jsx";
import ParcelHistory from "../pages/ParcelHistory.jsx";
import POtransaction from "../pages/POtransaction.jsx";
import Admindash from "../pages/Admindash.jsx";
import Addstamp from "../pages/Addstamp.jsx";
import Addscheme from "../pages/Addscheme.jsx";
import Addpostoffice from "../pages/Addpostoffice.jsx";
import Hubdashboard from "../pages/Hubdashboard.jsx";
import Hubupdate from "../pages/Hubupdate.jsx";
import Signup from "../pages/Signup.jsx";
import Services from "../pages/Services.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Stamps from "../pages/Stamps.jsx";
import Schemes from "../pages/Schemes.jsx";
import News from "../pages/News.jsx";
import PostageCalculator from "../pages/PostageCalculator.jsx";
import HubHistory from "../pages/Hubhistory.jsx";

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
      <Route path="/post-office-locator" element={<Findpost />} />
      <Route path="/find-pincode" element={<Findpin />} />
      <Route path="/hubdashboard" element={<Hubdashboard />} />
      <Route path="/hubupdate" element={<Hubupdate />} />
      <Route path="/hubhistory" element={<HubHistory />} />

      <Route path="/parcelhistory" element={<ParcelHistory />} />
      <Route path="/addpostoffice" element={<Addpostoffice />} />
      <Route path="/addscheme" element={<Addscheme />} />
      <Route path="/potransaction" element={<POtransaction />} />
      <Route path="/admindash" element={<Admindash />} />
      <Route path="/addstamp" element={<Addstamp />} />
      <Route path="/parcelupdate" element={<ParcelUpdate />} />
      <Route path="/podashboard" element={<PODashboard />} />
      <Route path="/copyngo" element={<CopyNGo />} />
      <Route path="/dynamo" element={<Dynamo />} />

      <Route
        path="/postoffice/:id"
        element={
          <ProtectedRoutes
            allowedRoles={["postoffice", "admin"]}
          ></ProtectedRoutes>
        }
      />
      <Route
        path="/hub/:id"
        element={
          <ProtectedRoutes allowedRoles={["hubofficer", "admin"]}>
            {/* <Dashboard /> */}
          </ProtectedRoutes>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoutes allowedRoles={["hubofficer", "admin"]}>
            {/* <Dashboard /> */}
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default routes;
