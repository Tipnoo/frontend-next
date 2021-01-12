import React, { useState } from 'react';

import Headerhomepage from '../components/headers/Header-homepage';
import EmailMarketing from '../components/EmailMarketing';
import Offer from '../components/Offer';
import PopupEmailSubscribed from '../components/popups/Popup-emailSubscribed';
import Footer from '../components/Footer';
import Head from 'next/head'

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
    <div>
    <Head>
        <title>Tipnoo Nextjs</title>
    </Head>
      <Headerhomepage searchQuery={search} />
      {marketingBar ? (
        <EmailMarketing
          toggleMarketingBar={toggleMarketingBar}
          togglePopup={togglePopup}
        />
      ) : null}
      {popup ? <PopupEmailSubscribed toggle={togglePopup} /> : null}
      <Offer searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default Home;