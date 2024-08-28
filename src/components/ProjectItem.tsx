const ProjectItem = ({ data }: any) => {
  return (
    <div className="flex bg-[#1b5657] text-justify rounded text-white  w-4/5 p-10">
      <img src={data.image} alt={data.title} className="w-3/6 min-h-96 rounded" />
      {/* <iframe src={data.live} referrerPolicy="" sandbox="allow-scripts" title={data.title} className="w-2/6 h-96 rounded"></iframe> */}
      <div className="p-5 font-serif w-4/6">
        <h2 className="pb-10 text-4xl text-center">{data.title}</h2>
        <p className="text-2xl leading-relaxed tracking-wide pl-10">
          {data.description}
        </p>
        <div className="flex gap-5 pl-10 pt-10">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 rounded bg-[#618685] "
          >
            GitHub Repo
          </a>
          <a
            href={data.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 rounded bg-[#618685]"
          >
            Check Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
