import Link from 'next/link';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import Footer from '../components/Footer';

const ContactUs = () => (
  <div>
    <HeaderPostAnOffer
      title="Contact Us"
      subtitle="Let us know how we can help"
    />
    <div className="text-center rounded-b text-teal-darkest px-2 py-3 lg:mt-12 h-screen md:w-7/12 xl:w-8/12 md:mx-auto">
      <div className="lg:flex">
        <img
          className="h-32 lg:h-56 xl:h-72 mx-auto pt-4 lg:mr-8"
          src="/images/robot-support.svg"
          alt="email"
        />
        <div className="w-5/6 xl:w-8/12 mx-auto mt-8 lg:bg-indigo-200 rounded-md relative lg:shadow-xl">
          <div className="hidden w-11 overflow-hidden lg:inline-block absolute left-0 mt-6 -ml-8">
            <div className=" h-16 bg-indigo-200 -rotate-45 transform origin-top-left" />
          </div>
          <div className="text-lg font-bold lg:font-normal xl:text-2xl lg:px-16 text-gray-900 lg:py-auto">
            <span className="lg:flex lg:flex-col lg:justify-center lg:p-4 xl:pt-8">
              Hello, I&apos;m AQ-305!
              {' '}
              <br />
              Tipnoo is mostly run by robots like me, but if you send us an email to
              {' '}
              <span className="text-indigo-600"> hello@tipnoo.com</span>
              {' '}
              a human will
              answer you gladly!
            </span>
          </div>
          <div className="mt-8 text-lg bg-yellow-600 hover:bg-yellow-500 transform hover:translate-y-0.5 text-white font-bold py-4 px-4 rounded w-4/5 md:w-4/5 lg:w-8/12 lg:hidden border-b-4 border-r-2 border-yellow-700 mb-4 mx-auto cursor-pointer">
            <Link
              href="/"
            >
              Return to the homepage
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white border-gray-300 border rounded-sm mt-6 p-2 mx-8 lg:mx-16 xl:w-8/12 xl:mx-auto lg:mt-20">
        <p className="p-2 font-semibold lg:font-normal text-gray-600">
          You can let us know about your experience using Tipnoo clicking
          {' '}
          <a className="text-indigo-600" target="blank" rel="noopener noreferrer" href="https://legismusic.typeform.com/to/igbO4azb">here</a>
          .
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default ContactUs;
