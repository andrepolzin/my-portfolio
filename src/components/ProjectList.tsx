import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }: any) => {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center items-center w-full px-3 pb-3 lg:pb-7 gap-10">
      <h1 className="flex justify-center lg:w-full p-5 lg:pt-10 md:text-4xl text-white font-serif items-center text-2xl underline animate-pulse">
        My Projects
      </h1> 

      {projects.map((project: any, index: number) => (
        <ProjectItem key={index} data={project} />
      ))}
    </div>
  );
};

export default ProjectList;
