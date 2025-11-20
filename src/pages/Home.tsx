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
      <div className="flex flex-col lg:flex-row justify-center items-center p-5 text-white font-serif tracking-wider text-m gap-14">

        <div className="flex flex-col items-center">
          <img
            src={dev}
            alt="developer"
            className="animate-bounce rounded-full w-10 h-10 md:w-20 md:h-20 lg:w-28 lg:h-28"
          />
          <div className="md:w-[400px] lg:w-[500px] border-2 border-slate-300 p-7 rounded lg:rounded-lg shadow-2xl text-center bg-gradient-to-r from-cyan-900 via-emerald-500 to-cyan-900">
            <span className="block md:text-lg lg:text-3xl font-bold pb-3">
              FULL-STACK DEVELOPER{" "}
            </span>
            <span className="block md:text-lg lg:text-3xl font-bold">
              ANDRÉ POLZIN
            </span>
          </div>
        </div>

        <div>
          <img
            src="/images/about.jpg"
            alt="myself"
            className="rounded-lg border-2 border-[#133d3d] shadow-2xl hover:scale-110 duration-300 w-[300px] md:w-[350px] md:h-[450px] lg:h-[500px] lg:w-[400px]"
          />
        </div>

      </div>

      <div className="flex flex-col text-white font-serif tracking-wider gap-8 justify-center items-center">
        <div className="flex flex-col md:w-[85%] lg:text-2xl gap-10 text-justify justify-center items-center text-lg md:text-2xl border-b-2 shadow-sm p-5 lg:pb-10">
          <p className="w-[85%] lg:w-[60%]">
            I am a passionate Software Developer with over a year of
            professional experience and over 3 years building personal projects.
            I started coding out of curiosity, and it quickly became a strong
            passion that turned into a career.
          </p>
          <p className="w-[85%] lg:w-[60%]">
            I love creating things from scratch, learning new technologies, and
            improving with every project I work on. My focus is to keep growing
            as a developer and contribute to building meaningful, high-quality
            software.
          </p>
        </div>

        <div className="flex flex-wrap justify-around pb-5 w-[85%] md:text-2xl lg:h-[300px] lg:w-[600px]">
          <h2 className="w-full text-center text-2xl md:text-3xl underline pb-5 animate-pulse">
            Skills
          </h2>

          <ul>
            <li>ReactJS</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
            <li>CSS</li>
          </ul>

          <ul>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>ExpressJS</li>
            <li>PostgreSQL</li>
            <li>Git and GitHub</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center border-t-2 leading-relaxed tracking-wider">
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
