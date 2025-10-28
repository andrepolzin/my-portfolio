import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const RootLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="bg-gradient-to-r from-[#7fa8a8] via-[#408081] to-[#305e5e] border-t-2">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
