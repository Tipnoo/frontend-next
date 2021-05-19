import Link from 'next/link';

const PostOfferNotice = () => (
  <div className="hidden rounded-md bg-gray-800 w-11/12 m-auto my-3 md:flex md:justify-center md:py-3 px-8">
    <span className="my-auto" role="img" aria-label="hand">
      👉
      {' '}
    </span>
    <p className="ml-8  w-2/3 text-white">
      <b>
        Searching for the best player for your team?
        <br className="" />
        Reach thousands of gamers on
        {' '}
        <u>Tipnoo</u>
      </b>
    </p>
    <Link href="/esports-offer">
      <a className="p-2 my-auto text-center border-b-4 bg-gray-800 hover:text-white text-red-600 border-2 border-red-600 hover:border-white font-bold rounded">
        Post an Offer
      </a>
    </Link>
  </div>
);

export default PostOfferNotice;
