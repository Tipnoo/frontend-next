import Footer from '../components/Footer';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import ButtonPublishOffer from '../components/buttons/Btn-publishOffer';

const CancelOffer = () => (
  <div>
    <HeaderPostAnOffer
      title="Your order has been Cancelled"
    />
    <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
      <div className="w-5/6 mx-auto mt-4">
        <p className="text-lg">
          <b>If you want, you can publish a new offer here:</b>
        </p>
        <ButtonPublishOffer />
      </div>
    </div>
    <Footer />
  </div>
);

export default CancelOffer;
