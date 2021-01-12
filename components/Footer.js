import Link from 'next/link';

const Footer = () => {
  const getFullYear = () => new Date().getFullYear();

  return (
    <div className="w-screen bg-gray-800 h-44 text-white text-center border-t-4 border-purple-500">
      <div className="flex flex-row">
        <div className="flex-1">
          <img
            className="h-14 pt-4 mt-4 mx-auto"
            src="/images/tipnoo-logo.png"
            alt="tipnoo-logo"
          />
        </div>
        <div className="flex-1 mt-6">
          <Link className="text-white block" href="/esports-offer">
            <b>Post an Offer</b>
          </Link>
          <Link className="text-white block" href="/privacy-cookies">
            <b>Privacy & Cookies</b>
          </Link>
          <Link className="text-white block" href="/contact">
            <b>Contact</b>
          </Link>
        </div>
      </div>
      <h4 className="text-gray-400 pt-8 pl-8">
        <b>{getFullYear()} © Tipnoo</b>
      </h4>
    </div>
  );
};

export default Footer;
