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
      <div className="w-5/6 lg:w-4/6 xl:w-3/6 mx-auto mt-4">
        <p className="text-lg lg:font-light lg:text-2xl md:px-20 lg:px-0">
          <b>
            Your order has been cancelled by yourself.
            <br className="hidden lg:block" />
            {' '}
            If it was an error, you can publish a new offer here:
          </b>
        </p>
        <ButtonPublishOffer />
        <p className="text-lg lg:text-2xl mt-8 lg:font-light">
          <b>Or you can just go back to the homepage:</b>
        </p>
        <ButtonReturnToHome />
      </div>
    </div>
    <Footer />
  </div>
);

export default CancelOffer;
