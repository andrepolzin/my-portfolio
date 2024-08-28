import ProjectItem from "./ProjectItem";


const ProjectList = ({projects}: any) => {
  return (
    <div className="flex flex-col items-center w-full p-10 gap-10">

        {projects.map((project: any, index: number) => (
            <ProjectItem key={index} data={project}/>
        ))}

    </div>
  );
};

export default ProjectList;
