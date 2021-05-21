import Link from 'next/link';

const HeaderPostAnOffer = (props) => (
  <div
    className="bg-cover shadow-xl"
    style={{
      backgroundImage: 'url(/images/tipnoo-home-7.jpg)',
    }}
  >
    <nav className="pl-4 pr-4 py-2">
      <Link href="/">
        <img
          className="h-16 mx-auto pt-4 cursor-pointer"
          src="/images/tipnoo-logo.png"
          alt="tipnoo-logo"
        />
      </Link>
    </nav>
    <h1 className="w-4/5 lg:w-2/5 xl:w-2/6 lg:mb-4 lg:pt-2 text-2xl xl:text-3xl text-center font-extrabold mt-4 pb-4 text-white lg:text-black mx-auto">
      {props.title}
      <br />
      {props.subtitle}
    </h1>
  </div>
);

export default HeaderPostAnOffer;
