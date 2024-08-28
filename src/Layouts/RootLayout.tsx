import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const RootLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="bg-[#376E6F] border-t-2">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
