import React, { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-blue-300">
            About
          </p>
        </div>

        {/* <p className="text-xl mt-5">
        I am a web developer, Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology and currently doing freelance gigs.
        </p> */}

        <br />

        <p 
          data-aos="fade-up"
          data-aos-duration="3000"
          className="text-lg lg:text-xl text-justify">
        I am Ogbaje Leo Arome, a passionate and creative frontend developer with a keen eye for design. My journey in web development started From an early age, I had an insatiable curiosity for technology and a passion for creating things. As a child, I would spend hours tinkering with computers and exploring the wonders of the internet. Little did I know that this fascination would eventually lead me to a fulfilling career in web development.. I am proficient in HTML, CSS, Git & Github JavaScript,  and I have experience working with various frontend frameworks like React and Vue.js. <br /><br />

In my projects, I strive to create engaging and user-friendly experiences by combining my technical skills with a strong understanding of user experience principles. I am a continuous learner, always seeking opportunities to enhance my skills and stay up-to-date with the latest web technologies. <br /><br />

When I'm not coding, you can find me enjoying nature, experimenting with new technologies, and finding inspiration from all corners of the web. <br /><br /><br />
        </p></div>
    </div>
  );
};

export default About;
