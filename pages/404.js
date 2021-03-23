import Footer from '../components/Footer';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import ButtonReturnToHome from '../components/buttons/Btn-returnToHome';

const NotFoundPage = () => (
  <div>
    <HeaderPostAnOffer
      title="Page Not Found!"
      subtitle="They call it a 404 Error"
    />
    <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
      <img
        className="h-32 mx-auto pt-4"
        src="/images/404-not-found.png"
        alt="email"
      />
      <div className="w-5/6 mx-auto mt-4">
        <p className="text-xl font-bold">
          Our robots couldn't find the page that you requested in the URL
        </p>
        <div className="bg-white border-gray-400 border rounded mt-4">
          <p className="p-2 font-semibold text-gray-600">
            It was speculated that error 404 was named after a room at CERN,
            where Tim Berners-Lee, the inventor of the 'web', had his office. But
            this room, in fact, never existed. Just like this page...
          </p>
        </div>
        <ButtonReturnToHome />
      </div>
    </div>
    <Footer />
  </div>
);

export default NotFoundPage;
