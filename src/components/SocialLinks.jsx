import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf"
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/Ogbajeleo",
      style: "rounded-tr-md hover:bg-blue-700",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Ogbajeleo",
      style: "rounded-tr-md hover:bg-gray-950 hover:animate-pulse",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:leonardaromeh@gmail.com",
      style: "rounded-tr-md hover:bg-red-400 hover:animate-pulse",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      style: "rounded-br-lg hover:bg-green-600 hover:animate-pulse",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
        
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/Omaebije",
      style: "rounded-br-lg hover:bg-blue-500 hover:animate-pulse",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600 hover:bg-gray-900" +
              " " +style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default SocialLinks;
