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
        <a className="fixed right-0 z-40 py-2 px-2 mr-4 mt-4 text-center bg-red-500 hover:bg-red-700 text-white font-bold rounded">
          Post Offer
        </a>
      </Link>
    </nav>
  </div>
);

export default NavbarHomepage;
