import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '@components/Footer';
import HeaderPostAnOffer from '@components/headers/Header-postAnOffer';
import {
  webOwner, personalData, informationUsage, cookiePolicy, legalResponsibility, expectUsers,
} from '@components/content/privacyPageContent';

const PrivacyCookies = () => {
  const dropdown = (title, content) => (
    <div>
      <Accordion className="mt-4 mb-2 mx-4">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-50">
          <Typography component="span">
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );

  return (
    <div>
      <HeaderPostAnOffer
        title="Privacy Policy"
        subtitle="and Cookie Settings"
      />
      <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
        {dropdown('Web Owner', webOwner)}
        {dropdown('Protection of Personal Data', personalData)}
        {dropdown('Collection & Usage of Information', informationUsage)}
        {dropdown('Cookie Policy', cookiePolicy)}
        {dropdown('Legal Responsibility for Content', legalResponsibility)}
        {dropdown('What we Expect from our Users', expectUsers)}
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyCookies;
