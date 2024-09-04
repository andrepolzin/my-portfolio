import { NavLink } from "react-router-dom";
import tags  from "/images/tags.jpg"

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-5 h-44 bg-gradient-to-l from-[#7fa8a8] via-[#408081] to-[#305e5e] text-white font-serif">
      <NavLink
        to="/about"
        className="text-4xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <span className="text-8xl text-[#0be70b5e] font-bold animate-pulse pr-3">A</span>
        <span>NDRÉ </span>
        <span className="text-8xl text-[#0be70b5e] font-bold animate-pulse pl-3">P</span>
        <span>OLZIN</span>
      </NavLink>
      <img src={tags} alt="tags" className="w-52 h-36 rounded-3xl shadow-2xl animate-pulse" />
      <div className="flex items-center text-2xl gap-5">
        <NavLink
          to="/"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#618685] underline-offset-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#618685] underline-offset-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          All Projects
        </NavLink>
        <NavLink
          to="/about"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#618685] underline-offset-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#618685] underline-offset-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
