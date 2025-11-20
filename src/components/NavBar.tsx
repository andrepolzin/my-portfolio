import { NavLink } from "react-router-dom";
import tags  from "/images/tags.jpg"

const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-around items-center gap-y-3 bg-gradient-to-l from-[#7fa8a8] via-[#408081] to-[#305e5e] text-white font-serif lg:p-8">
      <NavLink
        to="/about"
        className="text-4xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 pt-3 lg:pt-0"
      >
        <span className="text-5xl md:text-7xl text-[#0be70b5e] font-bold animate-pulse pr-1 lg:pr-3">A</span>
        <span className="text-sm md:text-4xl">NDRÉ </span>
        <span className="text-5xl md:text-7xl text-[#0be70b5e] font-bold animate-pulse pl-3">P</span>
        <span className="text-sm md:text-4xl">OLZIN</span>
      </NavLink>
      <img src={tags} alt="tags" className="w-10 lg:w-15 h-10 lg:h-15 rounded-3xl shadow-2xl animate-pulse " />
      <div className="flex items-center text-lg md:text-2xl justify-around bg-[#0c5555] w-full lg:w-fit lg:bg-transparent">
        <NavLink
          to="/"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#0be70b5e] underline-offset-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#0be70b5e] underline-offset-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#0be70b5e] underline-offset-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className=" hover:bg-[#376E6F] p-2 rounded hover:underline decoration-[#0be70b5e] underline-offset-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
