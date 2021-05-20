import Link from 'next/link';

const Footer = () => {
  const getFullYear = () => new Date().getFullYear();

  return (
    <div className="w-screen bg-gray-800 h-44 text-white text-center border-t-4 border-purple-800">
      <div className="flex flex-row">
        <div className="flex-1">
          <img
            className="h-14 pt-4 mt-4 mx-auto"
            src="/images/tipnoo-logo.png"
            alt="tipnoo-logo"
          />
        </div>
        <div className="flex-1 mt-6">
          <Link href="/esports-offer">
            <b className="text-white block">Post an Offer</b>
          </Link>
          <Link href="/privacy-cookies">
            <b className="text-white block">Privacy & Cookies</b>
          </Link>
          <Link href="/contact">
            <b className="text-white block">Contact Us</b>
          </Link>
        </div>
      </div>
      <h4 className="text-gray-400 pt-8 pl-8">
        <b>
          {getFullYear()}
          {' '}
          © Tipnoo
        </b>
      </h4>
    </div>
  );
};

export default Footer;
