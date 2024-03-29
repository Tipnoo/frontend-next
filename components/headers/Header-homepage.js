import Link from 'next/link';
import SearchBar from '../SearchBar';

const Headerhomepage = (props) => {
  const search = (e) => {
    props.searchQuery(e);
  };

  return (
    <div
      className="bg-cover flex flex-col relative h-64 md:h-72 lg:h-80"
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
          <Link href="/esports-offer">
            <a className="fixed right-0 z-40 p-2 md:px-4 md:text-lg mr-4 lg:mr-12 mt-4 text-center border-2 border-b-4 hover:border-white border-black bg-white hover:bg-black text-black hover:text-white font-bold rounded">
              Post Offer
            </a>
          </Link>
        </nav>
      </div>
      <h1 className="text-2xl lg:text-3xl text-center font-extrabold mt-4 text-white">
        Find your eSports Team
      </h1>
      <SearchBar searchQuery={search} />
      <svg xmlns="http://www.w3.org/1999/xlink" viewBox="1500 -5 1440 100"><path fill="#F3F4F6" d="M0,60L60,64C120,68,240,76,360,84C480,92,600,100,720,90C840,80,960,52,1080,36C1200,20,1320,16,1440,22C1560,28,1680,44,1800,58C1920,72,2040,84,2160,76C2280,68,2400,40,2520,36C2640,32,2760,52,2880,50C3000,48,3120,24,3240,22C3360,20,3480,40,3600,54C3720,68,3840,76,3960,74C4080,72,4200,60,4320,64C4440,68,4560,88,4680,98C4800,108,4920,108,5040,106C5160,104,5280,100,5400,92C5520,84,5640,72,5760,72C5880,72,6000,84,6120,82C6240,80,6360,64,6480,50C6600,36,6720,24,6840,28C6960,32,7080,52,7200,64C7320,76,7440,80,7560,78C7680,76,7800,68,7920,56C8040,44,8160,28,8280,26C8400,24,8520,36,8580,42L8640,48L8640,120L8580,120C8520,120,8400,120,8280,120C8160,120,8040,120,7920,120C7800,120,7680,120,7560,120C7440,120,7320,120,7200,120C7080,120,6960,120,6840,120C6720,120,6600,120,6480,120C6360,120,6240,120,6120,120C6000,120,5880,120,5760,120C5640,120,5520,120,5400,120C5280,120,5160,120,5040,120C4920,120,4800,120,4680,120C4560,120,4440,120,4320,120C4200,120,4080,120,3960,120C3840,120,3720,120,3600,120C3480,120,3360,120,3240,120C3120,120,3000,120,2880,120C2760,120,2640,120,2520,120C2400,120,2280,120,2160,120C2040,120,1920,120,1800,120C1680,120,1560,120,1440,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" /></svg>
    </div>
  );
};

export default Headerhomepage;
