import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-950 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white ">
        <div className="flex flex-col space-y-8 justify-between ">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact Me</h1>
            <p className="pt-2 text-cyan-100 text-sm">
              If there is a will there is a Way!
            </p>
          </div>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="call"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>+(918) (01842) (8198)</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="mail"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>abtsegatesfaye2@gmaillcom</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="location"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>Campus 11, KP8B, KIIT University</span>
              </div>
              <div className="flex space-x-4 text-lg">
                <a href="#">
                  {" "}
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#">
                  {" "}
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#">
                  {" "}
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="#">
                  {" "}
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div>
            </div>
            <div className=" bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 flex-grow">
              <form action="" className="flex flex-col space-y-4 ">
                <div>
                  <label htmlFor="" className="text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 
                    outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                    focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Message
                  </label>
                  <textarea
                    type="text"
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                    focus:ring-2 focus:ring-teal-300"
                  ></textarea>
                </div>
                <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script
        async
        src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"
      ></script>
    </div>
  );
};

export default ContactForm;