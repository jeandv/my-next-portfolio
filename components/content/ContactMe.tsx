'use client'

import React, { useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const isFormValid = () => {
    return (
      name.length >= 3 &&
      email.length >= 10 &&
      phone.length >= 6 &&
      message.length >= 20
    );
  };

  return (
    <AnimationContainer customClassName="w-full">
      <h2
        className="font-bold text-2xl md:text-2xl tracking-tight mb-8 text-white text-center lg:text-start"
        id="contact"
      >
        Contact me
      </h2>

      <div className="w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-6 mb-10">
          {/* <a href='mailto:jeanrdev@gmail.com' target='_blank' rel='noreferrer' className='w-full'> */}
          <div className="w-full rounded border border-gray-800 bg-[#080809] p-4 shadow-sm sm:p-6 transition ease">
            <h6 className="font-bold text-1xl tracking-tight text-white text-start">
              Email
            </h6>
            <p className="text-base mt-2 text-gray-400">
              jeanrdev@gmail.com
            </p>
          </div>
          {/* </a> */}

          <a
            href="https://wa.link/ke5dhr"
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <div className="w-full rounded border border-gray-800 bg-[#080809] p-4 shadow-sm sm:p-6 transition ease">
              <h6 className="font-bold text-1xl tracking-tight text-white text-start">
                Phone
              </h6>
              <p className="text-base mt-2 text-gray-400">+584122901679</p>
            </div>
          </a>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <form
            action="https://formspree.io/f/xdorkorr"
            method="POST"
            className="w-full space-y-4"
          >
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                minLength="3"
                required
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  minLength="10"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                  placeholder="Phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  minLength="6"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full h-32 rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                placeholder="Message"
                id="message"
                name="message"
                minLength="20"
                required
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center rounded px-5 py-3 text-white bg-black hover:bg-gray-900 shadow-sm transition ease mx-auto"
              disabled={!isFormValid()}
            >
              <span className="font-medium text-base">Send</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default ContactMe;
