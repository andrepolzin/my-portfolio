const ProjectItem = ({ data }: any) => {
  return (
    <div className="flex flex-col items-center bg-[#1b5657] w-full lg:h-[800px] md:w-[80%] lg:w-[40%] text-justify rounded text-white md:p-10 lg:p-5 hover:shadow-2xl hover:scale-110 duration-300">
      <img src={data.image} alt={data.title} className="h-60 md:h-96 lg:h-[350px] rounded md:w-[90%] lg:w-[100%]" />
      {/* <iframe src={data.live} referrerPolicy="" sandbox="allow-scripts" title={data.title} className="w-2/6 h-96 rounded"></iframe> */}
      <div className="p-5 font-serif w-full">
        <h2 className="pb-10 text-2xl text-center">{data.title}</h2>
        <p className="text-base md:text-2xl leading-relaxed tracking-wide">
          {data.description}
        </p>
        <div className="flex gap-5 pt-5 justify-center">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[35%] md:w-28 p-2 border-2 rounded text-center bg-[#618685] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            GitHub Repo
          </a>
          <a
            href={data.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[35%] md:w-28 p-2 border-2 text-center rounded bg-[#618685] transition hover:-translate-y-1 ease-in-out duration-300 hover:scale-110"
          >
            Check it Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
