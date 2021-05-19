import Link from 'next/link';

const NavbarHomepage = () => (
  <div className="w-screen">
    <nav className="pl-4 pr-4 py-2 flex">
      <div className="w-1/3" />
      <Link href="/">
        <a className="w-1/3">
          <img
            className="h-16 mx-auto pt-4"
            src="/images/tipnoo-logo.png"
            alt="tipnoo-logo"
          />
        </a>
      </Link>
      <Link href="/esports-offer">
        <a className="fixed right-0 z-40 p-2 md:px-4 md:text-lg mr-4 lg:mr-12 mt-4 text-center border-b-4 hover:border-yellow-800 border-yellow-600 bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded">
          Post Offer
        </a>
      </Link>
    </nav>
  </div>
);

export default NavbarHomepage;
