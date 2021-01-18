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
      <div className="w-5/6 mx-auto mt-4">
        <p className="text-lg">
          <b>We just sent you two emails:</b>
        </p>
        <div className="bg-white border-gray-400 border rounded mt-4">
          <p className="p-2 font-semibold text-gray-600">
            1. A welcome one, where you&apos;ll find your unique link to edit or
            delete your offer
          </p>
        </div>
        <div className="bg-white border-gray-400 border rounded mt-2 mb-4">
          <p className="p-2 font-semibold text-gray-600">
            2. Your receipt if the payment was successful, created by Stripe
          </p>
        </div>
        <p className="text-sm text-gray-600">
          Check the spam folder if you don&apos;t find them!
        </p>
        <ButtonReturnToHome />
      </div>
    </div>
    <Footer />
  </div>
);

export default OfferPublished;
