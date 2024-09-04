import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  
  return (
    <div>
      <h1 className="flex justify-center h-40 text-white font-serif items-center text-4xl underline decoration-wavy animate-pulse">About Me</h1>
      <div className="flex justify-evenly h-fit items-start p-20">
        <p className="text-white w-2/4 text-3xl text-justify font-serif leading-relaxed">
          Hello, there! My name is André and I'm a self-taught software
          developer that has been on the journey for over 2 years now. I was
          born and raised in Brazil, but in March 2019, I went to San Francisco,
          California to study English. After living there for a few months, I
          was heavily influenced by the local tech environment and decided this
          would be my future career. <br /> <br />I got my Bachelor's degree in Business
          Administration, on December 2018, in Brazil, but I knew something was
          missing. I needed something more specific, then I found out that being
          a programmer could and did filled that gap in my life. <br /> <br /> During my free
          time I love enjoying the outside. It could be a simple hike, but my
          favorite activity is fishing with friends and family. Also, I like
          reading books and watching a good TV show (Supernatural is my favorite
          one haha).
        </p>
        <img src="/images/about.jpg" alt="myself" className="w-96 rounded-lg shadow-lg border-4 border-[#133d3d]"/>
      </div>
    </div>
  );
};

export default About;
