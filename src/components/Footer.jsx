import React from "react";
import { FaFacebook, FaGithub, Faaedin, FaTwitter, FaLinkedin, FaMedium, FaMediumM, FaInstagram } from "react-icons/fa";
import { a } from "react-scroll";

function Footer(){

    return(
      //   <div className="text-center p-6 bg-black footer">
      //   <span className="text-white">&copy; 2024 Copyright - </span>
      //   <a className="hover:animate-pulse text-blue-300 font-bold" href="https://ogbajeleo.vercel.app">Ogbaje Leo Arome </a>
      // </div>

      <footer className="bg-gray-900 text-center text-white dark:bg-neutral-600">
    <div className="container pt-9">
      <div className="mb-9 flex justify-center items-center lg:hidden">
        <a 
        href='https://www.twitter.com/Omaebije'
        className="mr-9 text-white hover:text-blue-500 dark:text-neutral-200">
         <FaTwitter size={30} />
        </a>

        <a 
        href='https://www.facebook.com/leo.ogbaje'
        className="mr-9 text-white hover:text-blue-800 dark:text-neutral-200">
         <FaFacebook size={30} />
        </a>

        <a 
        href='https://www.github.com/Ogbajeleo'
        className="mr-9 text-white hover:text-gray-800 dark:text-neutral-200">
         <FaGithub size={30} />
        </a>

        <a 
        href='https://www.Linkedin.com/in/Ogbajeleo'
        className="mr-9 text-white hover:text-blue-300 dark:text-neutral-200">
         <FaLinkedin size={30} />
        </a>

        <a 
        href='https://www.Instagram.com/Ogbajeleo'
        className="mr-9 text-white hover:text-pink-500 dark:text-neutral-200">
         <FaInstagram size={30} />
        </a>
       
      </div>
    </div>

    {/* <!--Copyright section--> */}
    <div
      className="bg-black p-4 text-center text-slate-100 dark:bg-neutral-700 dark:text-neutral-200">
      © 2024 Copyright: &emsp;
      <a
        className="text-blue-200 hover:rotate-1 duration-300 hover:text-blue-300 dark:text-neutral-200"
        to="https://twitter.com/Omaebije"
      > Ogbaje Leo Arome</a>
    </div>
  </footer>
    )
}


export default Footer
