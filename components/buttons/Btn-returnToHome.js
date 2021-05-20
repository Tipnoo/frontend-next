import Link from 'next/link';

const ButtonReturnToHome = () => (
  <div className="mt-8 text-lg bg-yellow-600 hover:bg-yellow-500 transform hover:translate-y-0.5 text-white font-bold py-4 px-4 rounded w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/6 border-b-4 border-r-2 border-yellow-700 mb-4 mx-auto cursor-pointer">
    <Link
      href="/"
    >
      Return to the homepage
    </Link>
  </div>
);

export default ButtonReturnToHome;
