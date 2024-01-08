import React, { useState } from "react";
import { FaBars, FaComment, FaHome, FaInfo, FaPodcast, FaSketch, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      icon:<FaHome /> ,
    },
    {
      id: 2,
      link: "about",
      icon:<FaInfo /> ,
    },
    {
      id: 3,
      link: "portfolio",
      icon:<FaPodcast /> ,
    },
    {
      id: 4,
      link: "experience",
      icon:<FaSketch /> ,
    },
    {
      id: 5,
      link: "contact",
      icon:<FaComment /> ,
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="https://rahulkarda.netlify.app">Rahul</a></h1> */}
        <h1 className="text-5xl font-signature ml-2"><a className="link-underline link-underline-black hover:animate-pulse" href="https://ogbajeleo.vercel.app" target="_blank" rel="noreferrer">Ogbaje Leo</a></h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link,icon }) => (
          <li
            key={id}
            className="nav-links px-6 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-slate-200 duration-200 link-underline"
          >
            <Link to={link} smooth duration={500}>
              <div className="flex items-center justify-center gap-2">{icon} {link}</div>
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link,icon }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                  <div className="flex items-center justify-center gap-3">{icon} {link}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
