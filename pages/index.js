import React, { useState } from 'react';

import Head from 'next/head';
import Headerhomepage from '../components/headers/Header-homepage';
import EmailMarketing from '../components/EmailMarketing';
import Offer from '../components/Offer';
import PopupEmailSubscribed from '../components/popups/Popup-emailSubscribed';
import Footer from '../components/Footer';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [marketingBar, setMarketingBar] = useState(true);
  const [popup, setPopup] = useState(false);

  const toggleMarketingBar = () => {
    setMarketingBar(!marketingBar);
  };

  const togglePopup = () => {
    setPopup(!popup);
  };

  const search = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Tipnoo Nextjs</title>
      </Head>
      <Headerhomepage searchQuery={search} />
      <Offer searchQuery={searchQuery} />
      {marketingBar ? (
        <EmailMarketing
          toggleMarketingBar={toggleMarketingBar}
          togglePopup={togglePopup}
        />
      ) : null}
      {popup ? <PopupEmailSubscribed toggle={togglePopup} /> : null}
      <Footer />
    </div>
  );
};

export default Home;
