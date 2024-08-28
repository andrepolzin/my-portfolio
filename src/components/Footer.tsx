import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import NavBar from "./NavBar";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#618685] h-64 font-serif text-white border-t-2 p-10">
      <div>
        <ul className="flex text-4xl gap-8 p-7">
          <li className="bg-green-500 rounded-full p-2">
            <a href="https://wa.me/5547992912811" target="_blank">
              <FaWhatsapp />
            </a>
          </li>

          <li className="bg-blue-950 rounded-full p-2">
            <a href="https://github.com/andrepolzin" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li className="bg-blue-500 rounded-full p-2">
            <a
              href="https://www.linkedin.com/in/andr%C3%A9-luiz-polzin-91135213b/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="bg-[#e93086] rounded-full p-2">
            <a href="https://www.instagram.com/andrepolzin/" target="_blank">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      <NavBar />
    </div>
  );
};

export default Footer;
