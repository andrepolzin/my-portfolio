import { useEffect } from "react";
import Form from "../components/Form";

const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])


  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white font-serif text-3xl md:text-4xl lg:py-10 underline p-5 animate-pulse">Contact Me</h1>
      <Form />
    </div>
  );
};

export default Contact;
