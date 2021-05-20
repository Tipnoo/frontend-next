import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {
  const search = (e) => {
    props.searchQuery(e);
  };

  return (
    <div className="bg-white shadow flex w-3/4 md:w-5/12 rounded-md m-auto mt-6">
      <span className="w-auto flex justify-end items-center p-2">
        <i>
          <SearchIcon fontSize="large" />
        </i>
      </span>
      <Typed
        strings={[
          'Asserter',
          'G2 Esports',
          'Top Lane',
          'League of Legends',
          'Fnatic',
          'Defender',
          'Team Liquid',
          'Fortnite',
        ]}
        typeSpeed={120}
        backSpeed={80}
        backDelay={1100}
        startDelay={1500}
        showCursor={true}
        cursorChar={'|'}
        attr="placeholder"
        loop
      >
        <input
          className="w-full rounded pt-2 outline-none font-bold text-2xl placeholder-gray-700"
          type="text"
          onChange={search}
        />
      </Typed>
    </div>
  );
};

export default SearchBar;
