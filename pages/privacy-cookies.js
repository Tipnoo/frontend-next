import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '@components/Footer';
import HeaderPostAnOffer from '@components/headers/Header-postAnOffer';
import { webOwner, personalData } from '@components/content/privacyPageContent';

const PrivacyCookies = () => {
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
        <Accordion className="mt-4 mb-2 mx-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="">{eachTitle}</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-blue-50">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. 
              {webOwner} 
              {personalData}
            </Typography>
          </AccordionDetails>
        </Accordion>
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
