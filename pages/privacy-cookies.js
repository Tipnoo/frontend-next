import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Footer from '../components/Footer';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import getSortedContent from '../lib/content';

const PrivacyCookies = ({ allContentData }) => {
  const [openedDropdown, setOpenedDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const openDropDown = (index) => {
    setOpenedDropdown(!openedDropdown);
    setActiveDropdown(index);
  };

  const eachDropdown = () => {
    console.log('conteeent', allContentData);

    // const pageContent = [
    //   { title: 'Web Owner', content: '#webowner111' },
    //   { title: 'Protection of Personal Data', content: 'Protection of Personal Data111' },
    //   { title: 'Collection & Usage of Information', content: 'Collection & Usage of Information111' },
    //   { title: 'Cookie Policy', content: 'Cookie Policy111' },
    //   { title: 'Legal Responsibility for Content', content: 'Legal Responsibility for Content111' },
    //   { title: 'What we Expect from our Users', content: 'What we Expect from our Users111' },
    // ];
    return allContentData.map((eachContent, index) => (
      <div key={index}>
        <div className="bg-white border-gray-400 border rounded-sm mt-4 p-2 mx-4 flex items-center md:w-9/12 xl:w-6/12 md:m-auto md:mt-4 cursor-pointer">
          <div>
            <AddIcon />
          </div>
          <div className="flex-1">
            <p
              onClick={() => openDropDown(index)}
              className="p-2 font-bold xl:text-lg text-gray-600"
            >
              {eachContent.title}
            </p>
          </div>
        </div>
        {openedDropdown && activeDropdown === index && (
        <div className="bg-indigo-100 rounded-sm p-2 mx-4 md:w-9/12 xl:w-6/12 md:m-auto">
          <div dangerouslySetInnerHTML={{__html: eachContent.contentHtml }} className="p-2 font-semibold text-gray-600" />
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

export async function getStaticProps() {
  const allContentData = await getSortedContent();
  return {
    props: {
      allContentData,
    },
  };
}
