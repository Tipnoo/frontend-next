import Footer from '../components/Footer';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import ButtonReturnToHome from '../components/buttons/Btn-returnToHome';

const OfferDeleted = () => (
  <div>
    <HeaderPostAnOffer
      title="Job Done!"
      subtitle="Your Offer has been successfully deleted"
    />
    <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
      <img
        className="h-32 mx-auto pt-4"
        src="/images/trash-robot.png"
        alt="email"
      />
      <div className="w-5/6 mx-auto mt-6">
        <p className="text-xl">
          <b>
            Following your orders, our robot Ep-092 has deleted your offer
            from our system.
          </b>
        </p>
        <div className="bg-white border-gray-400 border rounded-sm mt-4 p-2">
          <p className="p-2 font-semibold text-gray-600">
            If you want, you can let us know about your experience using
            Tipnoo
            {' '}
            <a href="https://legismusic.typeform.com/to/igbO4azb">here</a>
            .
          </p>
        </div>
      </div>
      <ButtonReturnToHome />
    </div>
    <Footer />
  </div>
);

export default OfferDeleted;