import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import projects from "../data/projects.json";
import dev from "/images/dev.jpg";

const Home = () => {
  return (
    <div>
      <div className="flex justify-around items-center p-10 text-white font-serif tracking-wider text-5xl">
        <img
          src={dev}
          alt="developer"
          className="animate-bounce rounded-full w-80 h-80"
        />
        <p className="border-2 border-slate-300 p-10 rounded shadow-2xl text-center bg-gradient-to-r from-cyan-900 via-emerald-500 to-cyan-900">
          FRONT-END DEVELOPER <br /> <br />
          ANDRÉ POLZIN
        </p>
        <img
          src="/images/about.jpg"
          alt="myself"
          className="rounded-lg border-2 border-[#133d3d] shadow-2xl hover:scale-110"
        />
      </div>

      <div className="flex flex-col text-white font-serif tracking-wider gap-24 justify-center items-center">
        <p className="text-justify text-3xl leading-relaxed border-b-2 shadow-lg w-2/4">
          Hello, I am a React front-end developer with over 2 years of
          experience in JavaScript along with Tailwind and TypeScript.
          Comfortable with consuming APIs using Fetch or Axios. <br />
          <br />
          I have also got some knowledge about NodeJS, ExpressJS, being able to
          perform CRUD operations using Insomnia. <br />
          <br /> Familiar with PostgreSQL, but more importantly I am always
          willing to learn new tolls/technologies.
        </p>

        <table className="flex flex-col justify-center items-center border border-collapse p-10 text-2xl font-serif bg-gradient-to-r from-cyan-900 via-emerald-500 to-cyan-900 gap-5">
          <thead>
            <tr className="text-3xl">Skills</tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-5">ReactJS</td>
              <td className="border px-5">JavaScript</td>
              <td className="border px-5">TypeScript</td>
              <td className="border px-5">CSS and Tailwind</td>
            </tr>

            <tr>
              <td className="border px-5">NodeJS</td>
              <td className="border px-5">ExpressJS</td>
              <td className="border px-5">PostgreSQL</td>
              <td className="border px-5">Git and GitHub</td>
            </tr>
          </tbody>
        </table>
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
