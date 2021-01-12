import Link from 'next/link';

const HeaderPostAnOffer = (props) => {
  return (
    <div
      className="bg-cover border-b-4 border-purple-500"
      style={{
        backgroundImage: 'url(/images/tipnoo-home-1.jpg)',
      }}
    >
      <nav className="pl-4 pr-4 py-2">
        <Link href="/">
          <img
            className="h-16 mx-auto pt-4"
            src="/images/tipnoo-logo.png"
            alt="tipnoo-logo"
          />
        </Link>
      </nav>
      <h1 className="w-4/5 text-2xl text-center font-extrabold mt-4 pb-4 text-white mx-auto">
        {props.title}
        <br />
        {props.subtitle}
      </h1>
    </div>
  );
};

export default HeaderPostAnOffer;
