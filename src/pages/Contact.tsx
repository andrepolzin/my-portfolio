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
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-white font-serif text-4xl underline decoration-wavy py-10 animate-pulse">Contact Me</h1>
      <Form />
    </div>
  );
};

export default Contact;
