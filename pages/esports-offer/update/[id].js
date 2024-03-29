import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import AddUpdateOffer from '../../../components/AddUpdateOffer';
import HeaderPostAnOffer from '../../../components/headers/Header-postAnOffer';
import PreviewOffer from '../../../components/PreviewOffer';
import UpdatingOffer from '../../../components/messages/UpdatingOffer';
import PopupDeleteOffer from '../../../components/popups/Popup-deleteOffer';
import Loading from '../../../components/messages/Loading';
import Error from '../../../components/messages/ErrorAlert';
import Footer from '../../../components/Footer';
// import getAllOfferIds from '../../../lib/idPaths';

import { getOffer, editOffer, deleteOffer } from '../../../services/apiClient/offers';

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

// export async function getStaticPaths() {
//   const paths = getAllOfferIds();
//   console.log('Offer ID paths', paths);
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps() {
//   const postData = await getAllOfferIds();
//   return {
//     props: {
//       postData,
//     },
//   };
// }

const UpdateOfferID = () => {
  const [offer, setOffer] = useState(null);
  const [error, setError] = useState(undefined);
  const [errors, setErrors] = useState(errorValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [imgActualSize, setImgActualSize] = useState(null);
  const [status, setStatus] = useState(STATUS.LOADING);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await getOffer(id);
        const offerFromDB = res.data;
        setOffer({ ...offerFromDB, file: offerFromDB.teamLogo });
        setStatus(STATUS.LOADED);
      } catch (err) {
        console.log('error useEffect', err);
      }
    };
    if (id) { getUsers(); }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer({ ...offer, [name]: value });
  };

  const handleFileChange = (e) => {
    const imgSize = e.target.files[0].size;
    if (imgSize <= 1000000) {
      const newLogo = URL.createObjectURL(e.target.files[0]);
      setOffer({ ...offer, teamLogo: e.target.files[0], file: newLogo });
    } else {
      setErrors({ ...errorValues, imgFileSize: true });
      setImgActualSize(imgSize);
    }
  };

  const mdeHandleChangeDescription = (e) => {
    setOffer({ ...offer, positionDescription: e });
  };

  const mdeHandleChangeRequirements = (e) => {
    setOffer({ ...offer, positionRequirements: e });
  };

  const mdeHandleChangeHowToApply = (e) => {
    setOffer({ ...offer, howToApply: e });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.positionDescription !== '' && errors.howToApply !== '') {
      setIsSubmitting(true);
      try {
        await editOffer(id, offer);
        await router.push('/');
      } catch (err) {
        console.log('error updating offer', err);
      }
    } else if (errors.positionDescription === '' && errors.howToApply === '') {
      setErrors({
        positionDescription: true,
        howToApply: true,
      });
    } else if (errors.positionDescription === '' && errors.howToApply !== '') {
      setErrors({
        positionDescription: true,
        howToApply: false,
      });
    } else if (errors.positionDescription !== '' && errors.howToApply === '') {
      setErrors({
        positionDescription: false,
        howToApply: true,
      });
    }
  };

  const handleDelete = () => {
    deleteOffer(id)
      .then(() => {
        router.push('/deleted');
      })
      .catch((err) => {
        console.log('error deleting offer', err);
      });
  };

  const toggleDeletePopup = () => {
    setDeletePopup(!deletePopup);
  };

  const closePopupImgSize = () => {
    setErrors({
      ...errorValues,
      imgFileSize: false,
    });
  };

  switch (status) {
    case STATUS.LOADING:
      return <Loading />;
    case STATUS.LOADED:
      return (
        <div>
          <NextSeo noindex />
          <HeaderPostAnOffer title="Update or Delete your Offer Here" />
          <div className="absolute w-screen">
            {isSubmitting ? (
              <div><UpdatingOffer /></div>
            ) : (
              <div>
                <div className="xl:fixed left-5 xl:w-3/12">
                  <div className="bg-red-100 text-center border-t-4 border-red-200 rounded-b text-blue-darkest px-2 py-3 shadow-md mt-4 xl:mt-0 mb-4">
                    <p className="font-bold text-lg mt-4">
                      You can Delete your Offer here:
                    </p>
                    <button
                      type="button"
                      className="bg-yellow-600 hover:bg-yellow-700 text-white border-b-4 border-r-2 border-yellow-700 hover:border-yellow-800 font-bold py-2 px-4 rounded w-2/5 lg:w-1/5 xl:w-3/5 mt-6 mb-4 mx-auto cursor-pointer"
                      onClick={(e) => {
                        toggleDeletePopup(e);
                      }}
                    >
                      Delete Offer
                    </button>

                    {deletePopup ? (
                      <PopupDeleteOffer
                        toggle={toggleDeletePopup}
                        deleteOffer={handleDelete}
                      />
                    ) : null}
                    <p className="text-gray-700 text-sm mt-2 mb-8 px-8 md:px-36 xl:px-2 lg:w-5/6 xl:w-6/6 lg:mx-auto">
                      Warning! This will permanently delete your offer from
                      Tipnoo. Do it only if you have already found your player
                      or you have more than enough applicants for your position.
                      You cannot retrieve back your offer once deleted.
                    </p>
                  </div>

                </div>
                <div
                  className="bg-blue-100 border-t-4 border-blue-200 rounded-b text-blue-darkest px-6 py-3 shadow-md mt-6 xl:w-5/12 xl:mx-auto"
                  role="alert"
                >
                  <div className="flex justify-center text-center">
                    <img className="h-6 my-auto" src="/images/001-info.svg" alt="info icon" />
                    <div>
                      <p className="font-bold xl:font-normal xl:px-8">
                        Due to our Security Policy, if you update your Offer
                        you must upload again the Team Logo
                      </p>
                    </div>
                  </div>
                </div>
                <AddUpdateOffer
                  handleChange={handleChange}
                  handleFileChange={handleFileChange}
                  handleSubmit={handleSubmit}
                  mdeHandleChangeDescription={mdeHandleChangeDescription}
                  mdeHandleChangeRequirements={mdeHandleChangeRequirements}
                  mdeHandleChangeHowToApply={mdeHandleChangeHowToApply}
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
                  closePopup={closePopupImgSize}
                  imgActualSize={imgActualSize}
                  wholeState={offer}
                  error500char={false}
                />
                <PreviewOffer
                  wholeState={offer}
                  marginBottom="mb-32 lg:mb-44"
                />
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
