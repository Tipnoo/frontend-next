import React, { useState, useEffect } from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import Markdown from 'markdown-to-jsx';
import PopupApplyToEmail from './popups/Popup-applyToEmail';

/**
 * Hidden content that shows up when you click on an offer
 */

const CardHiddenContent = (props) => {
  const [thereIsOffer, setThereIsOffer] = useState(undefined);
  const [emailPopup, setEmailPopup] = useState(false);

  useEffect(() => {
    if (props.offer === undefined) {
      setThereIsOffer(false);
    } else {
      setThereIsOffer(true);
    }
  }, [props.offer]);

  const needsToBeProPlayer = () => {
    if (props.offer.pro === true) {
      return (
        <div className="bg-red-300 text-center p-4 mb-4 rounded flex">
          <ErrorOutlineIcon className="self-center" />
          <p className="pl-2">
            You need to be a Professional Player to Apply to this position
          </p>
        </div>
      );
    }
    return (
      <div className="bg-green-300 text-center p-4 mb-4 rounded flex">
        <CheckCircleOutlineIcon className="self-center" />
        <p>
          You don't need to be a Professional Player to Apply to this position
        </p>
      </div>
    );
  };

  const salaryApplies = () => {
    if (
      props.offer.salary === '' ||
      props.offer.salary === 'The team has not specified a salary'
    ) {
      return (
        <p className="mb-4 text-gray-700">
          The team has not specified a salary
        </p>
      );
    }
    return <p className="mb-4 text-gray-700">{props.offer.salary} USD</p>;
  };

  const togglePopup = () => {
    setEmailPopup(!emailPopup);
  };

  const applyToURLorEmail = (URLorEmail) => {
    if (/\S+@\S+\.\S+/.test(URLorEmail)) {
      return (
        /**
         * It's an Email
         */
        <button
          onClick={togglePopup}
          className="bg-red-500 hover:bg-red-700 border-b-4 border-red-700 hover:border-red-800 text-white font-bold py-4 px-8 rounded my-4"
        >
          Apply to this Position
        </button>
      );
    }
    return (
      /**
       * It's an URL
       */
      <a href={URLorEmail} target="_blank" rel="noreferrer noopener">
        <button className="bg-red-500 hover:bg-red-700 border-b-4 border-red-700 hover:border-red-800 text-white font-bold py-4 px-8 rounded my-4">
          Apply to this Position
        </button>
      </a>
    );
  };

  /**
   * Handling custom CSS for Markdown Rendering
   */
  const paragraph = ({ children, ...props }) => <p {...props}>{children}</p>;
  const heading = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
  const quote = ({ children, ...props }) => (
    <blockquote {...props}>{children}</blockquote>
  );
  const ulist = ({ children, ...props }) => <ul {...props}>{children}</ul>;
  const olist = ({ children, ...props }) => <ol {...props}>{children}</ol>;

  const overridesOptions = {
    p: {
      component: paragraph,
      props: {
        className: 'mb-2',
      },
    },
    h1: {
      component: heading,
      props: {
        className: 'text-2xl font-bold mb-2',
      },
    },
    blockquote: {
      component: quote,
      props: {
        className:
          'relative p-2 text-xl italic border-l-4 text-neutral-600 border-yellow-500 mb-2',
      },
    },
    ul: {
      component: ulist,
      props: {
        className: 'list-disc ml-10 mb-2',
      },
    },
    ol: {
      component: olist,
      props: {
        className: 'list-decimal ml-10 mb-2',
      },
    },
  };

  return (
    <div className="p-8 bg-gray-100 text-left">
      {thereIsOffer && (
        <div className="text-sm">
          {needsToBeProPlayer()}
          <p className="text-2xl font-bold mb-2">Position Description</p>
          <Markdown
            options={{
              forceBlock: true,
              overrides: overridesOptions,
            }}
            className="text-gray-700"
          >
            {props.offer.positionDescription}
          </Markdown>
          <p className="text-2xl font-bold my-2">Position Requirements</p>
          <Markdown
            options={{
              forceBlock: true,
              overrides: overridesOptions,
            }}
            className="text-gray-700"
          >
            {props.offer.positionRequirements}
          </Markdown>
          <p className="text-2xl font-bold my-2">Location</p>
          <p className="text-gray-700">{props.offer.locationRestricted}</p>
          <p className="text-2xl font-bold my-2">Aprox. Annual Salary</p>
          {salaryApplies()}
          <div className="text-center">
            <p className="text-3xl font-bold my-2 border-t border-gray-400 pt-4">
              How to Apply?
            </p>
            <Markdown
              options={{
                forceBlock: true,
                overrides: overridesOptions,
              }}
              className="text-gray-700"
            >
              {props.offer.howToApply}
            </Markdown>
            {applyToURLorEmail(props.offer.applyURLorEmail)}
            {emailPopup ? (
              <PopupApplyToEmail
                toggle={togglePopup}
                applyEmail={props.offer.applyURLorEmail}
              />
            ) : null}
            <p className="text-xs text-center font-bold mb-4 mt-2">
              <span role="img" aria-label="hand">
                👉{' '}
              </span>
              Please reference you found the offer on Tipnoo, this helps us get
              more teams to post here!
            </p>
            <p className="text-xs text-gray-700 text-center">
              When applying for an offer, you should NEVER have to pay to apply.
              Also always verify you're actually talking to the
              esports team in the offer and not an imposter. When clicking on
              the button to apply above, you will leave Tipnoo and go to the
              application page for that team outside this site. Tipnoo accepts
              no liability or responsibility as a consequence of any reliance
              upon information on there (external sites) or here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardHiddenContent;
