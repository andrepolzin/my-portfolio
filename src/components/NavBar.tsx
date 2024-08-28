import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-5 h-44 bg-[#618685] text-white font-serif tracking-wider">
      <NavLink
        to="/about"
        className="text-4xl underline underline-offset-8 shadow-2xl"
      >
        <span className="text-6xl text-[#1b5657] font-bold">A</span>
        <span>NDRÉ </span>
        <span className="text-6xl text-[#1b5657] font-bold">P</span>
        <span>OLZIN</span>
      </NavLink>
      <div className="flex items-center text-2xl gap-5">
        <NavLink
          to="/"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#618685] underline-offset-8"
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#618685] underline-offset-8"
        >
          All Projects
        </NavLink>
        <NavLink
          to="/about"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#618685] underline-offset-8"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#618685] underline-offset-8"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
