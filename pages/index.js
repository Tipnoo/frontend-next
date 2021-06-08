import React, { useState } from 'react';

import SEOHeader from '../components/headers/Seo-Header';
import Headerhomepage from '../components/headers/Header-homepage';
import EmailMarketing from '../components/EmailMarketing';
import PostOfferNotice from '../components/PostOfferNotice';
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
      <SEOHeader
        title="Tipnoo - Find your eSports Team"
        description="eSports jobs and open positions for gamers. Become a professional player and step up your career!"
        type="website"
      />
      <Headerhomepage searchQuery={search} />
      <PostOfferNotice />
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
