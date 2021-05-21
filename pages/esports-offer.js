import { useState } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import AddUpdateOffer from '../components/AddUpdateOffer';
import PreviewOffer from '../components/PreviewOffer';
import Submitting from '../components/messages/Submitting';

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

const PostAnOffer = () => {
  const [values, setValues] = useState(initialValues);
  const [stripePromise, setStripePromise] = useState(() => loadStripe(process.env.STRIPE_PUBLIC_KEY));

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
  };

  const mdeHandleChangeRequirements = (e) => {
    setValues({ ...values, positionRequirements: e });
  };

  const mdeHandleChangeHowToApply = (e) => {
    setValues({ ...values, howToApply: e });
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
        console.log('got here 1 ==>>', stripe);
        const { data: { id } } = await createCheckoutSession(values);

        const { error } = await stripe.redirectToCheckout({
          sessionId: id,
        });
        console.log('got here 2 ==>>', error);
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
                <InfoOutlinedIcon className="text-lg mr-2 self-center" />
                <div>
                  <p className="font-bold">
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
