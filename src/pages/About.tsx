import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <h1 className="flex justify-center p-5 lg:pt-10 text-white font-serif items-center text-3xl md:text-4xl underline animate-pulse">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-evenly h-fit p-8 md:p-10 gap-5 lg:gap-8">
        <div className="flex flex-col gap-7 text-white order-2 lg:w-[65%] text-lg md:text-2xl text-justify font-serif md:leading-relaxed">
          <p>
            Hello, there! My name is André and I'm a self-taught software
            developer with over 1 year of experience working with a team as a full-stack developer 
            but I have been on the journey for over 3 years now. I was
            born and raised in Brazil, but in March 2019 I moved to San
            Francisco, California, to study English. However, after living there for a few
            months, I was not only learning a language, but got heavily influenced by the local tech environment. So I
            decided to start coding for fun and it soon became a habit for me.
          </p>
          <p>
            Back in Brazil, I got my Bachelor's degree in Business Administration, on December
            2018, but after graduating I felt I wanted to work with something different from what I had studied.
            My gut was telling me I needed to work with something more technical that would constantly challenge me 
            to study and learn new things. So, living in america helped me to fill this gap.
          </p>
          <p>
            Althoug I like to stay inside reading or watching TV shows or Counter Strike, during my free time I 
            love enjoying the outside as well. It could be a
            simple hike, a nice roadtrip, or go fishing with friends and family. 
          </p>
        </div>
        <img
          src="/images/about.jpg"
          alt="myself"
          className="w-72 md:w-96 order-1 rounded-lg shadow-lg border-4 border-[#133d3d]"
        />
      </div>
    </div>
  );
};

export default About;
