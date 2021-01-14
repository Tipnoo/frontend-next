import { useState } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import AddUpdateOffer from '../components/AddUpdateOffer';
import PreviewOffer from '../components/PreviewOffer';
import Submitting from '../components/messages/Submitting';

import { addOffer } from '../services/apiClient/offers';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const initialValues = {
  playerPosition: 'Player Position',
  esportsTeam: 'Your Esports Team',
  teamLogo: null,
  file:
    'https://res.cloudinary.com/tipnoo/image/upload/v1600871255/tipnoo-team-logos/file_v9ntnp.png',
  locationRestricted: 'Worldwide',
  primaryGame: 'Game 1',
  extraGame: 'Game 2',
  pro: 'false',
  positionDescription: 'Write the Description...',
  positionRequirements: 'Describe the Requirements...',
  salary: 'The team has not specified a salary',
  howToApply: 'Describe how to apply...',
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
  const [values, setValues] = useState(initialValues);

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
        this.setState({
          teamLogo: e.target.files[0],
          file: URL.createObjectURL(e.target.files[0]),
        });
      } else {
        this.setState({
          errors: {
            imgFileSize: true,
          },
          imgActualSize: imgSize,
        });
      }
    }
  };

  const mdeHandleChangeDescription = (e) => {
    this.setState({
      positionDescription: e,
    });
  };

  const mdeHandleChangeRequirements = (e) => {
    this.setState({
      positionRequirements: e,
    });
  };

  const mdeHandleChangeHowToApply = (e) => {
    this.setState({
      howToApply: e,
    });
  };

  const handleSubmit = async (e, id) => {
    console.log('PaymentMethod Id', id);

    const { history } = this.props;
    const {
      playerPosition,
      esportsTeam,
      teamLogo,
      locationRestricted,
      primaryGame,
      extraGame,
      pro,
      positionDescription,
      positionRequirements,
      salary,
      howToApply,
      applyURLorEmail,
      email,
      invoiceNotes,
    } = this.state;
    if (positionDescription !== '' && howToApply !== '') {
      this.setState({
        isSubmitting: true,
      });
      addOffer(
        {
          playerPosition,
          esportsTeam,
          locationRestricted,
          primaryGame,
          extraGame,
          pro,
          positionDescription,
          positionRequirements,
          salary,
          howToApply,
          applyURLorEmail,
          email,
          invoiceNotes,
          id,
        },
        teamLogo
      )
        .then((res) => {
          history.push(`/success`);
        })
        .catch((error) => {
          console.log(error);
        });
      this.setState({
        errors: {
          positionDescription: !positionDescription,
          howToApply: !howToApply,
        },
      });
    } else if (positionDescription === '' && howToApply === '') {
      this.setState({
        errors: {
          positionDescription: !positionDescription,
          howToApply: !howToApply,
        },
      });
    } else if (positionDescription === '' && howToApply !== '') {
      this.setState({
        errors: {
          positionDescription: !positionDescription,
        },
      });
    } else if (positionDescription !== '' && howToApply === '') {
      this.setState({
        errors: {
          howToApply: !howToApply,
        },
      });
    }
  };

  const closePopupImgSize = () => {
    this.setState({
      errors: {
        imgFileSize: !this.state.errors.imgFileSize,
      },
    });
  };

  return (
    <div>
      <HeaderPostAnOffer
        title={'Post your Offer on Tipnoo and Find the best players for your eSports Team within hours'}
        />
        <div className="absolute w-screen">
          {values.isSubmitting ? (
            <Submitting />
          ) : (
            <div>
              <Elements stripe={stripePromise}>
                <ElementsConsumer>
                  {({ elements, stripe }) => (
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
                      locationRestricted={'🌏 Worldwide'}
                      submitBtn={'Publish your Offer - $19'}
                      invoiceData={true}
                      stripe={stripe}
                      elements={elements}
                    />
                  )}
                </ElementsConsumer>
              </Elements>
              <PreviewOffer wholeState={values} marginBottom={'mb-32'} />
            </div>
          )}
        </div>
      </div>
  );
};

export default PostAnOffer;
