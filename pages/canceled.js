import Link from 'next/link';
import Footer from '../components/Footer';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import ButtonPublishOffer from '../components/buttons/Btn-publishOffer';

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
        <div className="mt-8 text-lg bg-yellow-600 hover:bg-yellow-500 transform hover:translate-y-0.5 text-white font-bold py-4 px-4 rounded w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/6 border-b-4 border-r-2 border-yellow-700 mb-4 mx-auto cursor-pointer">
          <Link
            href="/"
          >
            Return to the homepage
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default CancelOffer;
