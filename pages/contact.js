import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import Footer from '../components/Footer';
import ButtonReturnToHome from '../components/buttons/Btn-returnToHome';

const ContactUs = () => (
  <div>
    <HeaderPostAnOffer
      title="Contact Us"
      subtitle="Let us know how we can help"
    />
    <div className="bg-gray-50 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
      <img
        className="h-32 mx-auto pt-4"
        src="/images/robot-support.png"
        alt="email"
      />
      <div className="w-5/6 mx-auto mt-8">
        <div className="text-lg">
          <b>
            Hello, I'm Az-345!
            {' '}
            <br />
            Tipnoo is mostly run by robots, but if you send us an email to
            {' '}
            <p className="text-indigo-600"> hello@tipnoo.com</p>
            a human will
            answer you gladly!
          </b>
        </div>
        <div className="bg-white border-gray-300 border rounded-sm mt-6 p-2">
          <p className="p-2 font-semibold text-gray-600">
            You can let us know about your experience using Tipnoo clicking
            {' '}
            <a className="text-indigo-600" href="https://legismusic.typeform.com/to/igbO4azb">here</a>
            .
          </p>
        </div>
      </div>
      <ButtonReturnToHome />
    </div>
    <Footer />
  </div>
);

export default ContactUs;
