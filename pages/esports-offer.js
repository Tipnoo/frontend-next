import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import AddUpdateOffer from '../components/AddUpdateOffer';
import PreviewOffer from '../components/PreviewOffer';
import Submitting from '../components/messages/Submitting';
import SEOHeader from '../components/headers/Seo-Header';

import { createCheckoutSession } from '../services/apiClient/offers';

const initialValues = {
  playerPosition: '',
  esportsTeam: '',
  teamLogo: null,
  file:
    'https://res.cloudinary.com/tipnoo/image/upload/v1600871255/tipnoo-team-logos/file_v9ntnp.png',
  locationRestricted: 'Worldwide',
  primaryGame: '',
  extraGame: '',
  pro: 'false',
  positionDescription: '',
  positionRequirements: '',
  salary: 'The team has not specified a salary',
  howToApply: '',
  applyURLorEmail: '',
  email: '',
  errors: {
    positionDescription: false,
    howToApply: false,
    imgFileSize: false,
  },
  isSubmitting: false,
  imgActualSize: null,
};

const limit500CharError = {
  positionDescription500: false,
  positionRequirements500: false,
  howToApply500: false,
};

const PostAnOffer = () => {
  const [values, setValues] = useState(initialValues);
  const [error500Char, setError500Char] = useState(limit500CharError);
  const [stripePromise, setStripePromise] = useState(() => loadStripe(process.env.STRIPE_PUBLIC_KEY));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0] === undefined) {
      console.log('no image was selected as team logo');
    } else {
      const imgSize = e.target.files[0].size;
      if (imgSize <= 1000000) {
        setValues({ ...values, teamLogo: e.target.files[0], file: URL.createObjectURL(e.target.files[0]) });
      } else {
        setValues({
          ...values,
          errors: {
            ...values.errors,
            imgFileSize: true,
          },
          imgActualSize: imgSize,
        });
      }
    }
  };

  const mdeHandleChangeDescription = (e) => {
    setValues({ ...values, positionDescription: e });
    if (values.positionDescription.length > 499) {
      setError500Char({ ...error500Char, positionDescription500: true });
      console.log('more than 500 characters on Position Description, Stripe doesnt allow on its metadata');
    } else {
      setError500Char({ ...error500Char, positionDescription500: false });
    }
  };

  const mdeHandleChangeRequirements = (e) => {
    setValues({ ...values, positionRequirements: e });
    if (values.positionRequirements.length > 499) {
      setError500Char({ ...error500Char, positionRequirements500: true });
      console.log('more than 500 characters on Position Requirements');
    } else {
      setError500Char({ ...error500Char, positionRequirements500: false });
    }
  };

  const mdeHandleChangeHowToApply = (e) => {
    setValues({ ...values, howToApply: e });
    if (values.howToApply.length > 499) {
      setError500Char({ ...error500Char, howToApply500: true });
      console.log('more than 500 characters on How to Apply');
    } else {
      setError500Char({ ...error500Char, howToApply500: false });
    }
  };

  const closePopupImgSize = () => {
    setValues({
      ...values,
      errors: {
        ...values.errors,
        imgFileSize: false,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.positionDescription !== '' && values.howToApply !== '') {
      setValues({ ...values, isSubmitting: true });
      try {
        const stripe = await stripePromise;
        // console.log('got here 1 ==>>', stripe);
        const { data: { id } } = await createCheckoutSession(values);

        const { error } = await stripe.redirectToCheckout({
          sessionId: id,
        });
        // console.log('got here 2 ==>>', error);
      } catch (err) {
        console.log('error adding offer', err);
      }
    } else if (values.positionDescription === '' && values.howToApply === '') {
      setValues({
        ...values,
        errors: {
          ...values.errors,
          positionDescription: true,
          howToApply: true,
        },
      });
    } else if (values.positionDescription === '' && values.howToApply !== '') {
      setValues({
        ...values,
        errors: {
          ...values.errors,
          positionDescription: true,
          howToApply: false,
        },
      });
    } else if (values.positionDescription !== '' && values.howToApply === '') {
      setValues({
        ...values,
        errors: {
          ...values.errors,
          positionDescription: false,
          howToApply: true,
        },
      });
    }
  };

  return (
    <div>
      <SEOHeader
        title="Publish an eSport offer to find professional players - Tipnoo"
        description="Publish your open position on Tipnoo and find the best eSports gamer for your team within hours! Reach thousands of professional and amateur players, complete your Roster here."
        type="website"
      />
      <HeaderPostAnOffer
        title="Post your Offer on Tipnoo and Find the best players for your eSports Team within hours"
      />
      <div className="absolute w-screen">
        {values.isSubmitting ? (
          <Submitting />
        ) : (
          <div>
            <div
              className="bg-yellow-100 border-t-4 border-yellow-200 rounded-b text-blue-darkest px-6 py-3 shadow-md mt-6 lg:w-7/12 xl:w-5/12 mx-auto"
              role="alert"
            >
              <div className="flex justify-center text-center xl:px-8">
                <img className="h-8 my-auto" src="/images/002-info.svg" alt="info icon" />
                <div>
                  <p className="font-bold xl:font-normal px-2 md:px-4 xl:px-8">
                    Use the code
                    {' '}
                    <b className="text-indigo-600">LAUNCH</b>
                    {' '}
                    on the checkout page to get a 90% discount in your purchase!
                  </p>
                </div>
              </div>
            </div>
            <Elements stripe={stripePromise}>
              <AddUpdateOffer
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                handleSubmit={handleSubmit}
                mdeHandleChangeDescription={
                        mdeHandleChangeDescription
                      }
                mdeHandleChangeRequirements={
                        mdeHandleChangeRequirements
                      }
                mdeHandleChangeHowToApply={mdeHandleChangeHowToApply}
                errors={values.errors}
                closePopup={closePopupImgSize}
                imgActualSize={values.imgActualSize}
                locationRestricted="🌏 Worldwide"
                submitBtn="Proceed to Checkout - $99"
                invoiceData
                wholeState={values}
                error500char={error500Char}
              />
            </Elements>
            <PreviewOffer wholeState={values} marginBottom="mb-32 lg:mb-44" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostAnOffer;
