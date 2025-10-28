import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import projects from "../data/projects.json";
import dev from "/images/dev.jpg";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-around items-center p-10 lg:flex-row text-white font-serif tracking-wider text-5xl">
        <img
          src={dev}
          alt="developer"
          className="animate-bounce rounded-full w-10 h-10 lg:w-80 lg:h-80"
        />
        <p className="border-2 border-slate-300 p-10 rounded shadow-2xl text-center bg-gradient-to-r from-cyan-900 via-emerald-500 to-cyan-900">
          FULL-STACK DEVELOPER 
          ANDRÉ POLZIN
        </p>
        <img
          src="/images/about.jpg"
          alt="myself"
          className="rounded-lg border-2 border-[#133d3d] shadow-2xl hover:scale-110 duration-300"
        />
      </div>

      <div className="flex flex-col text-white font-serif tracking-wider gap-24 justify-center items-center">
        <div className="flex flex-col gap-10 text-justify text-lg  border-b-2 shadow-lg p-5">
          <p>
            I am a passionate Software Developer with over a year of professional
            experience and over 3 years building personal projects. I started
            coding out of curiosity, and it quickly became a strong passion that
            turned into a career.

          </p>
          <p>
            I love creating things from scratch, learning new technologies, and
            improving with every project I work on. My focus is to keep growing as
            a developer and contribute to building meaningful, high-quality
            software.
          </p>
        </div>

        <div>
          <p>Skills</p>

          <ul>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>CSS and Tailwind</li>
          </ul>

          <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Git and GitHub</li>
          </ul>
        </div>

      </div>

      <div className="flex flex-col items-center mt-28 pt-10 border-t-2 leading-relaxed tracking-wider">
        <h2 className="text-white text-5xl underline decoration-wavy pb-14 font-serif animate-pulse">
          Projects
        </h2>
        <ProjectList projects={projects.slice(0, 3)} />
        <Link
          to="/projects"
          className="border-2 rounded p-2 w-fit mb-10 font-serif text-white bg-[#618685] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
};

export default Home;
