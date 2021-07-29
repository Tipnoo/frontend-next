import Link from 'next/link';

const HeaderPostAnOffer = (props) => (
  <div
    className="bg-cover flex flex-col relative h-64 md:h-60 lg:h-60"
    style={{
      backgroundImage: 'url(/images/tipnoo-homepage.jpg)',
    }}
  >
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
        <Link href="/">
          <a className="absolute right-0 z-40 p-2 md:px-4 md:text-lg mr-4 lg:mr-12 mt-4 text-center border-2 border-b-4 hover:border-white border-black bg-white hover:bg-black text-black hover:text-white font-bold rounded">
            Homepage
          </a>
        </Link>
      </nav>
    </div>
    <h1 className="w-4/5 lg:w-2/5 xl:w-3/6 lg:mb-4 xl:pb-6 lg:pt-2 text-2xl xl:text-3xl text-center font-extrabold mt-4 pb-4 text-white mx-auto">
      {props.title}
      <br />
      {props.subtitle}
    </h1>
  </div>
);

export default HeaderPostAnOffer;
