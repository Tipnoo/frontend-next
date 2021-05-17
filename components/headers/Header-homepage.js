import NavBarHomepage from '../Navbar-homepage';
import SearchBar from '../SearchBar';

const Headerhomepage = (props) => {
  const search = (e) => {
    props.searchQuery(e);
  };

  return (
    <div
      className="pb-8 bg-cover border-b-4 border-purple-800"
      style={{
        backgroundImage: 'url(/images/tipnoo-home-8.jpg)',
      }}
    >
      <NavBarHomepage />
      <h1 className="text-2xl text-center font-extrabold mt-4 text-white">
        Find your eSports Team
      </h1>
      <SearchBar searchQuery={search} />
    </div>
  );
};

export default Headerhomepage;
