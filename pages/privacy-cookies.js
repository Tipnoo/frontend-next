import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Footer from '../components/Footer';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';

const PrivacyCookies = () => {
  const [openedDropdown, setOpenedDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const openDropDown = (index) => {
    setOpenedDropdown(!openedDropdown);
    setActiveDropdown(index);
  };

  const eachDropdown = () => {
    const privacyTitles = [
      'Web Owner',
      'Protection of Personal Data',
      'Collection & Usage of Information',
      'Cookie Policy',
      'Legal Responsibility for Content',
      'What we Expect from our Users',
    ];
    return privacyTitles.map((eachTitle, index) => (
      <div key={index}>
        <div className="bg-white border-gray-400 border rounded-sm mt-4 p-2 mx-4 flex items-center">
          <div>
            <AddIcon />
          </div>
          <div className="flex-1">
            <p 
              onClick={() => openDropDown(index)}
              className="p-2 font-bold text-gray-600"
            >
              {eachTitle}
            </p>
          </div>
        </div>
        {openedDropdown && activeDropdown === index && (
        <div className="bg-indigo-100 rounded-sm p-2 mx-4">
          <p className="p-2 font-semibold text-gray-600">Content goes here</p>
        </div>
        )}
      </div>
    ));
  };

  return (
    <div>
      <HeaderPostAnOffer
        title="Privacy Policy"
        subtitle="and Cookie Settings"
      />
      <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
        {eachDropdown()}
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyCookies;
