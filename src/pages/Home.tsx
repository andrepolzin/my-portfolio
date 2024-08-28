import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import projects from "../data/projects.json"

const Home = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center p-10 text-white font-serif tracking-wider text-5xl">
        <p className="border-2 border-slate-300 p-10 rounded shadow-2xl text-center">
          FRONT-END DEVELOPER <br /> <br />
          ANDRÉ POLZIN
        </p>
        <img
          src="/images/about.jpg"
          alt="myself"
          className="rounded-lg border-2 border-[#133d3d] shadow-2xl"
        />
      </div>

      <div className="flex flex-col w-2/4 text-white font-serif tracking-wider ml-48 gap-24">
        <p className="text-justify text-3xl leading-relaxed border-b-2 shadow-lg">
          Hello, I am a front-end developer whose focused on ReactJS/JavaScript
          along with Tailwind and TypeScript. Comfortable with consuming APIs
          using Fetch or Axios. <br/><br />
          When it comes to backend I have got some knowledge about NodeJS, ExpressJS, being able to perform CRUD operations using
          Insomnia. <br /><br /> I have also learned PostgreSQL which gives me a wider
          scope of the whole process. But more importantly I am always willing
          to learn new tolls/technologies.
        </p>
        <div>
          <h2 className="text-3xl underline underline-offset-4">Skills:</h2>
          <ul className="p-5 text-2xl leading-relaxed list-disc">
            <li>ReactJS</li>
            <li>JavaScript and TypeScript</li>
            <li>CSS and Tailwind</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>PostgreSQL</li>
            <li>Terminal</li>
            <li>Git and GitHub</li>
          </ul>
        </div>
      </div>
 

      <div className="flex flex-col items-center mt-28 pt-10 border-t-2 leading-relaxed tracking-wider">

        <h2 className="text-white text-5xl underline decoration-wavy pb-14 font-serif ">
          Projects
        </h2>
        <ProjectList projects={projects.slice(0, 3)}/>
        <Link to="/projects" className="border-2 rounded p-2 w-fit mb-10 font-serif text-white bg-[#618685]">See All Projects</Link>

      </div>
    </div>
  );
};

export default Home;
