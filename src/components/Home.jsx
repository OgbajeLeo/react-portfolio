import React from "react";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/resume.pdf"
import TypingAnimation from "./TypingAnimation";
// import HeroImage from "../assets/heroImage.png";

const Home = () => {

  const download= true;
  const href=resume
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home md:pt-10">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="small-screen hidden">
          <img
            src="https://res.cloudinary.com/duw4jtxls/image/upload/v1704680752/IMG-20230721-WA0038-removebg-preview_1_a9pljf.png"
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a <TypingAnimation text="FrontEnd Developer." />
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-xl">
            A Frontend Developer who crafts and build virtually appealing
            websites and Products that help your business grow online I love to
            work on web application using technologies like HTML,CSS,
            Javascript,TailwindCSS, and React
          </p>

          <div className="portfolio-btn">
            <a
              href={href}
              className="group text-white w-fit px-6 py-3 my-2 flex gap-4 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
              <span className="group-hover:rotate-270 duration-300">
                <FaDownload size={20} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="big-screen">
          <img
            src="https://res.cloudinary.com/duw4jtxls/image/upload/v1704680752/IMG-20230721-WA0038-removebg-preview_1_a9pljf.png"
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
