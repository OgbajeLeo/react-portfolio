import React, { useEffect, useRef,useState } from "react";
import { FaPhone } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


const Contact = () => {
  const [isLoading,setIsLoading]= useState(false)

  const serviceID ='service_oecgc0m'
  const templateID ='template_sv1spgt'
  const form = useRef();
  

  useEffect(() => emailjs.init("tzNBPOYcCpnQxURaP"), []);
  
  
//function for form reset
function handleSubmit(e){
  setIsLoading(true)
  
  e.preventDefault(); // prevents the page from reloading when you hit “Send”

  emailjs.sendForm(serviceID, templateID, form.current, 'tzNBPOYcCpnQxURaP')
    .then((result) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Message sent successfully"
      });

      e.target.reset();
    setIsLoading(false)
    }, (error) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Error, Please try again !"
      });
      e.target.reset();
      setIsLoading(false)
    });


  // setTimeout(() => {
  //   e.target.reset();
  //   setIsLoading(false)
  // }, 5000);
}
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-4 text-blue-300">
           Contact
          </p>
          <p className="py-6 block lg:hidden"> Need a web developer ? Submit the form below to get in touch with me</p>
        </div>
        
        <div className="flex justify-between items-center">

        <div className="hidden lg:block h-full lg:w-1/2 text-white pr-8">
                    <p className="hidden lg:block mt-3 mb-12 text-lg text-gray-500 dark:text-slate-400">
                    Need a web developer ? Submit the form below to get in touch with me
                    </p>
                    <ul className="mb-6 ml-8 md:mb-0 md:ml-0">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded border-2 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6 animate-bounce">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>

                            <div className="ml-4 mb-4">
                                <lee className="mb-2 text-xl font-medium leading-6 text-blue-300 dark:text-white">Address
                                </lee>
                                <p className=" dark:text-slate-400">Abuja,FCT</p>
                                <p className=" dark:text-slate-400">Nigeria</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded border-2 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6 animate-pulse">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>

                            <div className="ml-4 mb-4">
                                <lee className="mb-2 text-xl font-medium leading-6 text-blue-300 dark:text-white">Contact
                                </lee>
                                <p className=" dark:text-slate-400">Mobile: +234 9036787860</p>
                                <p className=" dark:text-slate-400">Mail: leonardaromeh@gmail.com</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded border-2 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6 animate-spin">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>

                            <div className="ml-4 mb-4">
                                <lee className="mb-2 text-xl font-medium leading-6 text-blue-300 dark:text-white">Working
                                    hours</lee>
                                <p className=" dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                <p className=" dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
                </div>


          <form
            ref={form}
            onSubmit={handleSubmit}
            name="contact_form"
            method="POST"
            // action="https://getform.io/f/b1bacef8-e9a0-43e0-a40a-67c1f2635986"
            className=" flex flex-col w-full md:w-1/2 lg:w-1/2"
          >

            <input type="hidden" name="contact_number" />
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-blue-300"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-blue-300"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-blue-300"
            ></textarea>

            <button type="submit" 
            disabled={isLoading}
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              {isLoading?'Sending...':'Send Message'} 
            </button>
          </form>
        </div>
      </div> 
    </div>
  );
};

export default Contact;
