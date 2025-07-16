'use client'

import React, { useState, ChangeEvent } from 'react';
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

         {/* <a
            href="https://wa.link/ke5dhr"
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >*/}
            <div className="w-full rounded border border-gray-800 bg-[#080809] p-4 shadow-sm sm:p-6 transition ease">
              <h6 className="font-bold text-1xl tracking-tight text-white text-start">
                Phone
              </h6>
              <p className="text-base mt-2 text-gray-400">+584122901679</p>
            </div>
          {/*  </a>*/}
        </div>
      </div>
    </AnimationContainer>
  );
};

export default ContactMe;
