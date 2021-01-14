import { Component } from 'react';

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

class ThankYouDOI extends Component {
  state = {
    urlEmail: undefined,
    urlHash: undefined,
    dbName: undefined,
    secret: undefined,
    error: undefined,
    status: STATUS.LOADING,
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    // console.log(values);
    this.setState(
      {
        urlEmail: values.email,
        urlHash: values.hash,
        secret: values.email + values.hash,
      },
      () => {
        const { secret } = this.state;
        // console.log('new secret', secret);
        getSecretFromDb({ secret })
          .then((response) => {
            // console.log('response from backend', response);
            if (response.data.secret === this.state.secret) {
              this.setState({
                status: STATUS.OK,
                dbName: response.data.name,
              });
              this.subscribeEmail();
            }
          })
          .catch((error) => {
            this.setState({
              error: error.name,
              status: STATUS.ERROR,
            });
          });
      }
    );
  }

  subscribeEmail = () => {
    const { urlEmail, dbName } = this.state;
    console.log(
      'email and name to subscribe once visited DOI page',
      urlEmail,
      dbName
    );
    subscribeEmail({ urlEmail, dbName })
      .then((res) => {
        console.log('response from apiClient call', res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { status, error } = this.state;
    switch (status) {
      case STATUS.LOADING:
        return <Loading />;
      case STATUS.OK:
        return (
          <div>
            <HeaderPostAnOffer
              title={'Success!'}
              subtitle={'You have been Subscribed'}
            />
            <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
              <img
                className="h-32 mx-auto pt-4"
                src="/images/subscribed-bot.png"
                alt="email"
              ></img>
              <div className="w-5/6 mx-auto mt-6">
                <p className="text-xl">
                  <b>
                    From now on, you will receive new eSports offers in your
                    mail inbox.
                  </b>
                </p>
                <div className="bg-white border-gray-400 border rounded mt-6">
                  <p className="p-4 font-semibold text-gray-600">
                    Remember: you'll have the option to unsubscribe at any time
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
              title={'There is an Error'}
              subtitle={'Sorry for the inconvenience!'}
            />
            <Error error={error} />
            <Footer />
          </div>
        );
      // no default
    }
  }
}

export default ThankYouDOI;
