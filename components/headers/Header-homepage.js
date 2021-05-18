import NavBarHomepage from '../Navbar-homepage';
import SearchBar from '../SearchBar';

const Headerhomepage = (props) => {
  const search = (e) => {
    props.searchQuery(e);
  };

  return (
  // <div
  //   className="pb-8 bg-cover border-b-4 border-purple-800"
  //   style={{
  //     backgroundImage: 'url(/images/tipnoo-home-8.jpg)',
  //   }}
  // >
    <div
      className="bg-cover bg-yellow-300 flex flex-col"
      style={{
        backgroundImage: 'url(/images/tipnoo-home-8.jpg)',
      }}
    >
      <NavBarHomepage />
      <h1 className="text-2xl text-center font-extrabold mt-4 text-white">
        Find your eSports Team
      </h1>
      <SearchBar searchQuery={search} />
      {/* <svg className="block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#F3F4F6" fillOpacity="1" d="M0,192L80,181.3C160,171,320,149,480,170.7C640,192,800,256,960,266.7C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
      </svg> */}

      <svg className="block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#F3F4F" fillOpacity="1" d="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,197.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
      </svg>

    </div>
  );
};

export default Headerhomepage;
