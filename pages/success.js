import Footer from '../components/Footer';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import ButtonReturnToHome from '../components/buttons/Btn-returnToHome';

const OfferPublished = () => (
  <div>
    <HeaderPostAnOffer
      title="Congratulations!"
      subtitle="Your Offer has been published"
    />
    <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
      <img
        className="h-32 mx-auto pt-4"
        src="/images/transactional-email.png"
        alt="email"
      />
      <div className="w-5/6 lg:w-4/6 xl:w-2/6 mx-auto mt-4">
        <p className="text-lg md:px-24">
          <b>Your offer has been published and we just sent you an email:</b>
        </p>
        <div className="bg-white border-gray-400 border rounded mt-4 md:w-4/5 md:mx-auto">
          <p className="p-2 font-semibold text-gray-600 md:px-4">
            In there, you&apos;ll find
            {' '}
            <b>a unique link </b>
            {' '}
            to edit or
            delete your offer whenever you feel like.
            <br />
&nbsp;
            Remember to check your spam folder if you don&apos;t find it :)
          </p>
        </div>
      </div>
      <ButtonReturnToHome />
    </div>
    <Footer />
  </div>
);

export default OfferPublished;
