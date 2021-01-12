/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PrivacyPageContent extends Component {
  render() {
    return (
      <div className="mt-8">
        <Link
          to="/"
          className="text-lg bg-yellow-600 hover:bg-yellow-500 transform hover:-translate-y-0.5 text-white font-bold py-4 px-4 rounded w-4/5 border-b-4 border-r-2 border-yellow-700 mb-4 mx-auto cursor-pointer"
        >
          Return to the homepage
        </Link>
      </div>
    );
  }
}

export default PrivacyPageContent;
