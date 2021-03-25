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
    <div className="pb-4 pt-6 bg-gray-800 flex-col relative">
      <h3 className="text-center font-bold text-white">
        Get a
        {' '}
        <b>weekly email</b>
        {' '}
        of all new eSports offers
      </h3>
      <form className="py-4 flex justify-center" onSubmit={handleSubmit}>
        <input
          className="bg-white w-1/5 rounded p-2 h-10 font-bold text-gray-700 mr-4"
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
          className="bg-white w-1/4 rounded p-2 h-10 font-bold text-gray-700 mr-4"
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
          className="bg-gray-800 text-red-600 border-2 border-red-600 font-bold px-2 h-10 rounded cursor-pointer"
          type="submit"
          value="Subscribe"
        />
      </form>
      <div className="text-right mb-2 absolute w-screen bottom-0">
        <span
          className="text-white text-2xl font-extrabold cursor-pointer mr-4"
          onClick={props.toggleMarketingBar}
        >
          &times;
        </span>
      </div>
    </div>
  );
};

export default EmailMarketing;
