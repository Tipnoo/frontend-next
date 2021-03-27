import { useState, useEffect } from 'react';

import queryString from 'query-string';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';

import {
  getSecretFromDb,
  subscribeEmail,
} from '../services/apiClient/marketing';

import Loading from '../components/messages/Loading';
import Error from '../components/messages/ErrorAlert';
import Footer from '../components/Footer';
import ButtonReturnToHome from '../components/buttons/Btn-returnToHome';

const STATUS = {
  LOADING: 'LOADING',
  OK: 'OK',
  ERROR: 'ERROR',
};

const ThankYouDOI = () => {
  const [urlEmail, setUrlEmail] = useState(undefined);
  const [urlHash, setUrlHash] = useState(undefined);
  const [dbSubscriberName, setDbSubscriberName] = useState(undefined);
  const [secret, setSecret] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [status, setStatus] = useState(STATUS.LOADING);

  const subscribeTheEmail = () => {
    console.log(
      'email and name to subscribe once visited DOI page',
      urlEmail,
      dbSubscriberName,
    );
    subscribeEmail({ urlEmail, dbSubscriberName })
      .then((res) => {
        console.log('response from apiClient call', res);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  useEffect(() => {
    const values = queryString.parse(location.search);

    setUrlEmail(values.email);
    setUrlHash(values.hash);
    setSecret(values.email + values.hash);
    console.log('secretito1', secret);
  }, []);

  useEffect(() => {
    if (secret) {
      getSecretFromDb({ secret })
        .then((res) => {
          console.log('secretito2', secret);
          console.log('response secret from backend', res.data.secret);
          if (res.data.secret === secret) {
            setDbSubscriberName(res.data.name);
            subscribeTheEmail();
            setStatus(STATUS.OK);
          }
        })
        .catch((errors) => {
          setError(errors.name);
          setStatus(STATUS.ERROR);
        });
    }
  }, [secret]);

  return (
    <div>
      {(() => {
        switch (status) {
          case STATUS.LOADING:
            return <Loading />;
          case STATUS.OK:
            return (
              <div>
                <HeaderPostAnOffer
                  title="Success!"
                  subtitle="You have been Subscribed"
                />
                <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
                  <img
                    className="h-32 mx-auto pt-4"
                    src="/images/subscribed-bot.png"
                    alt="email"
                  />
                  <div className="w-5/6 mx-auto mt-6">
                    <p className="text-xl">
                      <b>
                        From now on, you will receive new eSports offers in your
                        mail inbox.
                      </b>
                    </p>
                    <div className="bg-white border-gray-400 border rounded mt-6">
                      <p className="p-4 font-semibold text-gray-600">
                        Remember: you&apos;ll have the option to unsubscribe at any time
                        at the bottom of each one of our emails.
                      </p>
                    </div>
                    <ButtonReturnToHome />
                  </div>
                </div>
                <Footer />
              </div>
            );
          case STATUS.ERROR:
            return (
              <div>
                <HeaderPostAnOffer
                  title="There is an Error"
                  subtitle="Sorry for the inconvenience!"
                />
                <Error error={error} />
                <Footer />
              </div>
            );
      // no default
        }
      })()}
    </div>
  );
};

export default ThankYouDOI;
