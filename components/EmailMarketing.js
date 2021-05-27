import React, { useState } from 'react';

import { emailToDoubleOptIn } from '../services/apiClient/marketing';

const EmailMarketing = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => {
    props.toggleMarketingBar();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailToDoubleOptIn({ email, name })
      .then((res) => {
        handleClose();
        props.togglePopup();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pb-4 md:pb-2 pt-5 md:pt-4 lg:pt-2 xl:py-0 bg-gray-800 lg:flex lg:flex-row lg:justify-center bottom-0 sticky">
      <h3 className="text-center xl:text-lg font-bold my-auto lg:w-1/5 xl:w-3/12 text-white lg:mr-4">
        Get a
        {' '}
        <b>weekly email</b>
        <br className="hidden lg:block xl:hidden" />
        {' '}
        of all new eSports offers
      </h3>
      <form className="py-4 lg:w-2/5 flex justify-center" onSubmit={handleSubmit}>
        <input
          className="bg-white w-1/5 lg:w-2/5 rounded p-2 h-10 font-bold text-gray-700 mr-4"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          className="bg-white w-1/4 lg:w-3/5 rounded p-2 h-10 font-bold text-gray-700 mr-4"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          className="bg-gray-800 hover:text-white text-red-600 border-2 border-b-4 border-red-600 font-bold px-2 h-10 rounded cursor-pointer"
          type="submit"
          value="Subscribe"
        />
      </form>
      <div className="text-right mb-2 lg:mb-6 absolute w-4 bottom-0 right-0 lg:bottom-1/5 pr-8">
        <span
          className="text-white text-2xl font-extrabold cursor-pointer mr-4"
          onClick={props.toggleMarketingBar}
          role="button"
          tabIndex="0"
        >
          &times;
        </span>
      </div>
    </div>
  );
};

export default EmailMarketing;
