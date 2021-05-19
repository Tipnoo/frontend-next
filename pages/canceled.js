import Footer from '../components/Footer';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import ButtonPublishOffer from '../components/buttons/Btn-publishOffer';
import ButtonReturnToHome from '../components/buttons/Btn-returnToHome';

const CancelOffer = () => (
  <div>
    <HeaderPostAnOffer
      title="Your order has been Cancelled"
    />
    <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
      <div className="w-5/6 mx-auto mt-4">
        <p className="text-lg md:px-20">
          <b>Your order has been cancelled by yourself. If it was an error, you can publish a new offer here:</b>
        </p>
        <ButtonPublishOffer />
        <p className="text-lg mt-8">
          <b>Or you can just go back to the homepage:</b>
        </p>
        <ButtonReturnToHome />
      </div>
    </div>
    <Footer />
  </div>
);

export default CancelOffer;
