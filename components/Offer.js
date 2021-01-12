import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

import OfferCard from './OfferCard';
import CardHiddenContent from './CardHiddenContent';
import NoSearchMatch from './messages/NoSearchMatch';

import Loading from './messages/Loading';
import ErrorAlert from './messages/ErrorAlert';

import { getOffers } from '../services/apiClient/offers';

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

const Offer = (props, {offers}) => {
  // const [offers, setOffers] = useState([]);
  const [errors, setErrors] = useState(undefined);
  const [status, setStatus] = useState(STATUS.LOADING);

  // useEffect(() => {
  //   getOffers()
  //     .then((res) => {
  //       setOffers(res.data);
  //       setStatus(STATUS.LOADED);
  //     })
  //     .catch((error) => {
  //       setErrors(error.name);
  //       setStatus(STATUS.ERROR);
  //     });
  // }, []);

  useEffect(() => {
    console.log('props', props)
    console.log('offers', offers)
  }, []);

  

  const sortByDate = () => {
    offers.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
  };

  const timePassedSincePublication = () => {
    return offers.map((offer) => {
      offer.timePassed = `${formatDistanceToNow(
        new Date(offer.created_at)
      )} ago`;
      return offer;
    });
  };

  const searchFilterRendering = () => {
    const offersUpdated = offers.map((offer) => {
      offer.fullSearchQuery = `${offer.playerPosition} ${offer.esportsTeam} ${offer.primaryGame} ${offer.extraGame}`;
      return offer;
    });

    if (props.searchQuery === '') {
      return offers.map((offer, index) => {
        return (
          <OfferCard offer={offer} key={index}>
            <CardHiddenContent offer={offer} key={index} />
          </OfferCard>
        );
      });
    }

    const thereIsAMatch = offersUpdated.map((offer) => {
      return offer.fullSearchQuery
        .toLowerCase()
        .includes(props.searchQuery.toLowerCase());
    });

    if (props.searchQuery !== '' && thereIsAMatch.includes(true)) {
      return offersUpdated.map((offer, index) => {
        if (
          offer.fullSearchQuery
            .toLowerCase()
            .includes(props.searchQuery.toLowerCase())
        ) {
          return (
            <OfferCard offer={offer} key={index}>
              <CardHiddenContent offer={offer} key={index} />
            </OfferCard>
          );
        }
        return <div key={index}></div>;
      });
    }
    return <NoSearchMatch />;
  };

  switch (status) {
    case STATUS.LOADING:
      return <Loading />;
    case STATUS.LOADED:
      // sortByDate();
      // timePassedSincePublication();
      // return <div>{searchFilterRendering()}</div>;
      return <div>hello</div>;
    case STATUS.ERROR:
      return <ErrorAlert error={errors} />;
    // no default
  }
};


export const getStaticProps = async () => {
  const res = await getOffers();
  const offers = await res.data;
  
  return {data: res.data}

  return {
      props:{
         offers,
      }
  }
}

export default Offer;
