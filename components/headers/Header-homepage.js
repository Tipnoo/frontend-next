import NavBarHomepage from '../Navbar-homepage';
import SearchBar from '../SearchBar';

const Headerhomepage = (props) => {
  const search = (e) => {
    props.searchQuery(e);
  };

  return (
    <div
      className="pb-8 bg-cover border-b-4 border-purple-500"
      style={{
        backgroundImage: 'url(/images/tipnoo-home-1.jpg)',
      }}
    >
      <NavBarHomepage />
      <SearchBar searchQuery={search} />
      <h1 className="text-2xl text-center font-extrabold mt-4 text-white">
        Find your eSports Team
      </h1>
    </div>
  );
};

export default Headerhomepage;
