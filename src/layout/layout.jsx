import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx";
import Routers from "../Routes/routes.jsx";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Routers></Routers>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
