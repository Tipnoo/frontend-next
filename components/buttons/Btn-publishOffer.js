import Link from 'next/link';

const ButtonPublishOffer = () => (
  <div className="mt-8 text-lg bg-yellow-600 hover:bg-yellow-500 transform hover:-translate-y-0.5 text-white font-bold py-4 px-4 rounded w-4/5 border-b-4 border-r-2 border-yellow-700 mb-4 mx-auto cursor-pointer">
    <Link
      href="/esports-offer"
    >
      Publish an Offer
    </Link>
  </div>
);

export default ButtonPublishOffer;
