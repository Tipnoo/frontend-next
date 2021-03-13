import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AddUpdateOffer from '../../components/AddUpdateOffer';
import HeaderPostAnOffer from '../../components/headers/Header-postAnOffer';
import PreviewOffer from '../../components/PreviewOffer';
import PopupDeleteOffer from '../../components/popups/Popup-deleteOffer';
import Loading from '../../components/messages/Loading';
import Error from '../../components/messages/ErrorAlert';
import Footer from '../../components/Footer';

import { getOffer, editOffer, deleteOffer } from '../../services/apiClient/offers';

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

const errorValues = {
  positionDescription: false,
  howToApply: false,
  imgFileSize: false,
};

const UpdateOfferID = () => {
  const [offer, setOffer] = useState(null);
  const [error, setError] = useState(undefined);
  const [errors, setErrors] = useState(errorValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [imgActualSize, setImgActualSize] = useState(null);
  const [status, setStatus] = useState(STATUS.LOADING);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== router.route) {
      const { id } = router.query;

      console.log('router', router);
      console.log('router query', router.query);
      console.log('offerid', id);

      getOffer(id)
        .then((res) => {
        //   console.log('res data', res.data);
          setOffer(res.data);
          setStatus(STATUS.LOADED);
        //   console.log('fucking 1st offer', offer);
        })
        // .then(() => {
        //   console.log('fucking 2nd offer', offer);
        //   const { offer } = { ...values };
        //   console.log({ offer });
        //   const currentState = offer;
        //   console.log({ currentState });
        // currentState.file = currentState.teamLogo;
        // setValues({ ...values, offer: currentState });
        // })
        .catch((err) => {
          setError(err.name);
          setStatus(STATUS.ERROR);
        });
    }
  }, [router]);

  const handleChange = (e) => {
    const currentState = offer;
    const { name, value } = e.target;
    currentState[name] = value;
    setOffer(currentState);
  };

  //   handleFileChange = (e) => {
  //     const { offer } = { ...this.state };
  //     const currentState = offer;
  //     const newImage = e.target.files[0];
  //     const imgSize = e.target.files[0].size;
  //     if (imgSize <= 1000000) {
  //       currentState.teamLogo = newImage;
  //       currentState.file = URL.createObjectURL(e.target.files[0]);
  //       this.setState({
  //         offer: currentState,
  //       });
  //     } else {
  //       this.setState({
  //         errors: {
  //           imgFileSize: true,
  //         },
  //         imgActualSize: imgSize,
  //       });
  //     }
  //   };

  //   mdeHandleChangeDescription = (e) => {
  //     const { offer } = { ...this.state };
  //     const currentState = offer;
  //     currentState.positionDescription = e;
  //     this.setState({
  //       offer: currentState,
  //     });
  //   };

  //   mdeHandleChangeRequirements = (e) => {
  //     const { offer } = { ...this.state };
  //     const currentState = offer;
  //     currentState.positionRequirements = e;
  //     this.setState({
  //       offer: currentState,
  //     });
  //   };

  //   mdeHandleChangeHowToApply = (e) => {
  //     const { offer } = { ...this.state };
  //     const currentState = offer;
  //     currentState.howToApply = e;
  //     this.setState({
  //       offer: currentState,
  //     });
  //   };

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     const { history } = this.props;
  //     const {
  //       _id,
  //       playerPosition,
  //       esportsTeam,
  //       teamLogo,
  //       locationRestricted,
  //       primaryGame,
  //       extraGame,
  //       pro,
  //       positionDescription,
  //       positionRequirements,
  //       salary,
  //       howToApply,
  //       applyURLorEmail,
  //       email,
  //       invoiceAddress,
  //       invoiceNotes,
  //     } = this.state.offer;
  //     if (positionDescription !== '' && howToApply !== '') {
  //       this.setState({
  //         isSubmitting: true,
  //       });
  //       editOffer(
  //         _id,
  //         {
  //           playerPosition,
  //           esportsTeam,
  //           locationRestricted,
  //           primaryGame,
  //           extraGame,
  //           pro,
  //           positionDescription,
  //           positionRequirements,
  //           salary,
  //           howToApply,
  //           applyURLorEmail,
  //           email,
  //           invoiceAddress,
  //           invoiceNotes,
  //         },
  //         teamLogo
  //       )
  //         .then((res) => {
  //           history.push(`/`);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //       this.setState({
  //         errors: {
  //           positionDescription: !positionDescription,
  //           howToApply: !howToApply,
  //         },
  //       });
  //     } else if (positionDescription === '' && howToApply === '') {
  //       this.setState({
  //         errors: {
  //           positionDescription: !positionDescription,
  //           howToApply: !howToApply,
  //         },
  //       });
  //     } else if (positionDescription === '' && howToApply !== '') {
  //       this.setState({
  //         errors: {
  //           positionDescription: !positionDescription,
  //         },
  //       });
  //     } else if (positionDescription !== '' && howToApply === '') {
  //       this.setState({
  //         errors: {
  //           howToApply: !howToApply,
  //         },
  //       });
  //     }
  //   };

  //   handleDelete = () => {
  //     const offerId = this.props.match.params.id;
  //     const { history } = this.props;
  //     console.log('offerId', offerId);
  //     deleteOffer(offerId)
  //       .then((res) => {
  //         history.push('/deleted');
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  const toggleDeletePopup = () => {
    setDeletePopup(!deletePopup);
  };

  //   closePopupImgSize = () => {
  //     this.setState({
  //       errors: {
  //         imgFileSize: !this.state.errors.imgFileSize,
  //       },
  //     });
  //   };

  // const {
  //   status,
  //   error,
  //   errors,
  //   isSubmitting,
  //   offer,
  //   imgActualSize,
  // } = this.state;

  switch (status) {
    case STATUS.LOADING:
      return <Loading />;
    case STATUS.LOADED:
      return (
        <div>
          <HeaderPostAnOffer title="Update or Delete your Offer Here" />
          <div className="absolute w-screen">
            {isSubmitting ? (
              <div>Updating your Offer...</div>
            ) : (
              <div>
                <div
                  className="bg-blue-100 border-t-4 border-blue-200 rounded-b text-blue-darkest px-6 py-3 shadow-md mt-6"
                  role="alert"
                >
                  <div className="flex text-center">
                    <InfoOutlinedIcon className="text-lg mr-2 self-center" />
                    <div>
                      <p className="font-bold">
                        Due to our Security Policy, if you update your Offer
                        you must upload again the Team Logo
                      </p>
                    </div>
                  </div>
                </div>
                <AddUpdateOffer
                  handleChange={handleChange}
                //   handleFileChange={this.handleFileChange}
                //   handleSubmit={this.handleSubmit}
                //   mdeHandleChangeDescription={this.mdeHandleChangeDescription}
                //   mdeHandleChangeRequirements={
                //         this.mdeHandleChangeRequirements
                //       }
                //   mdeHandleChangeHowToApply={this.mdeHandleChangeHowToApply}
                  errors={errors}
                  playerPosition={offer.playerPosition}
                  esportsTeam={offer.esportsTeam}
                  locationRestricted={offer.locationRestricted}
                  primaryGame={offer.primaryGame}
                  extraGame={offer.extraGame}
                  pro={offer.pro}
                  positionDescription={offer.positionDescription}
                  positionRequirements={offer.positionRequirements}
                  salary={offer.salary}
                  howToApply={offer.howToApply}
                  applyURLorEmail={offer.applyURLorEmail}
                  submitBtn="Update your Offer"
                  invoiceData={false}
                  updating
                //   closePopup={this.closePopupImgSize}
                  imgActualSize={imgActualSize}
                />
                <PreviewOffer
                  wholeState={offer}
                  marginBottom="mb-8"
                />

                <div className="bg-red-100 text-center border-t-4 border-red-200 rounded-b text-blue-darkest px-2 py-3 shadow-md mb-32">
                  <p className="font-bold text-lg mt-4">
                    You can Delete your Offer here:
                  </p>
                  <button
                    type="button"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white border-b-4 border-r-2 border-yellow-700 font-bold py-2 px-4 rounded w-2/5 mt-6 mb-4 mx-auto cursor-pointer"
                    onClick={(e) => {
                      toggleDeletePopup(e);
                    }}
                  >
                    Delete Offer
                  </button>

                  {deletePopup ? (
                    <PopupDeleteOffer
                      toggle={toggleDeletePopup}
                    //   deleteOffer={handleDelete}
                    />
                  ) : null}
                  <p className="text-gray-700 text-sm mt-2 mb-8 px-8">
                    Warning! This will permanently delete your offer from
                    Tipnoo. Do it only if you have already found your player
                    or you have more than enough applicants for your position.
                    You cannot retrieve back your offer once deleted.
                  </p>
                </div>
              </div>
            )}
          </div>
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
};

export default UpdateOfferID;
