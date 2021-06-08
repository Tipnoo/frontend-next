import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Footer from '../components/Footer';
import HeaderPostAnOffer from '../components/headers/Header-postAnOffer';
import getSortedContent from '../lib/content';
import SEOHeader from '../components/headers/Seo-Header';

const PrivacyCookies = ({ allContentData }) => {
  const [openedDropdown, setOpenedDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const openDropDown = (index) => {
    setOpenedDropdown(!openedDropdown);
    setActiveDropdown(index);
  };

  const eachDropdown = () =>
    allContentData.map((eachContent, index) => (
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
        <div className="bg-indigo-100 rounded-sm mx-4 p-4 md:py-4 md:px-8 md:w-9/12 xl:w-6/12 md:mx-auto text-left prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: eachContent.contentHtml }} />
        </div>
        )}
      </div>
    ));
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHeader
        title="Privacy policy and cookies - Tipnoo"
        description="Read our privacy policy here and what we do with the data we receive on Tipnoo"
        type="website"
      />
      <HeaderPostAnOffer
        title="Privacy Policy"
        subtitle="and Cookie Settings"
      />
      <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md flex-auto pb-20">
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
