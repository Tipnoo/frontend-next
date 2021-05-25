import Link from 'next/link';

const ButtonPublishOffer = () => (
  <div className="mt-8 text-lg bg-blue-600 border-blue-800 hover:bg-blue-500 md:w-3/5 lg:w-2/5 transform hover:translate-y-0.5 text-white font-bold py-4 px-4 rounded w-4/5 xl:w-2/6 border-b-4 border-r-2 mb-4 mx-auto cursor-pointer">
    <Link
      href="/esports-offer"
    >
      Publish an Offer
    </Link>
  </div>
);

export default ButtonPublishOffer;
