import { useState } from 'react';
import { useRouter } from 'next/router';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import AddUpdateOffer from '../components/AddUpdateOffer';
import PreviewOffer from '../components/PreviewOffer';
import Submitting from '../components/messages/Submitting';

import { addOffer } from '../services/apiClient/offers';

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
  invoiceNotes: '',
  errors: {
    positionDescription: false,
    howToApply: false,
    imgFileSize: false,
  },
  isSubmitting: false,
  imgActualSize: null,
};

const PostAnOffer = () => {
  const router = useRouter();
  const [values, setValues] = useState(initialValues);
  const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

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
        imgFileSize: !values.errors.imgFileSize,
      },
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (values.positionDescription !== '' && values.howToApply !== '') {
      setValues({ ...values, isSubmitting: true });
      try {
        const {data: {id}} = await addOffer(values);
        
        const stripe = await stripePromise;
        console.log('got here 11==>>', stripe);
        const {error} = await stripe.redirectToCheckout({
          sessionId: id
        });
        console.log('got here 22==>>', error);
        //router.push('/success');
        /*setValues({
          ...values,
          errors: {
            ...values.errors,
            positionDescription: !values.errors.positionDescription,
            howToApply: !values.errors.howToApply,
          },
        });*/
      } catch (err) {
        console.log('error adding offer', err);
      }
    } else if (values.positionDescription === '' && values.howToApply === '') {
      setValues({
        ...values,
        errors: {
          ...values.errors,
          positionDescription: !values.errors.positionDescription,
          howToApply: !values.errors.howToApply,
        },
      });
    } else if (values.positionDescription === '' && values.howToApply !== '') {
      setValues({
        ...values,
        errors: {
          ...values.errors,
          positionDescription: !values.errors.positionDescription,
        },
      });
    } else if (values.positionDescription !== '' && values.howToApply === '') {
      setValues({
        ...values,
        errors: {
          ...values.errors,
          howToApply: !values.errors.howToApply,
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
                submitBtn="Proceed to Checkout - $19"
                invoiceData
              />
            </Elements>
            <PreviewOffer wholeState={values} marginBottom="mb-32" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostAnOffer;
