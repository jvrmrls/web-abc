import { Container } from '@mui/material';
import SloganComponent from '#/components/domain/home/SloganComponent.jsx';
import ServicesComponent from '#/components/domain/home/ServicesComponent.jsx';
import TermsAndConditions from '#/components/domain/home/TermsAndConditions';
import CompanyComponentV2 from '#/components/domain/home/CompanyComponentV2.jsx';
import CityComponentV2 from '#/components/domain/home/CityComponentV2.jsx';
import DescribeComponent from '#/components/domain/home/DescribeComponent.jsx';
import ContactComponent from '#/components/domain/home/ContactComponent.jsx';
import WhatsappAndQR from '#/components/domain/home/WhatsappAndQR.jsx';
import FooterComponentV2 from '#/components/domain/home/FooterComponentV2.jsx';

const HomePage = () => {
  // const ui = useUIState();

  // useEffect(() => {
  //   ui.setTitle('Home');
  // }, []);

  return (
    <Container sx={style.container} className='relative max-w-[1200px]'>
      <CompanyComponentV2 />
      <CityComponentV2 />
      <SloganComponent />
      <DescribeComponent />
      <ServicesComponent />
      <ContactComponent />
      <WhatsappAndQR />
      <TermsAndConditions />
      <FooterComponentV2 />
    </Container>
  );
};

const style = {
  container: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  }
};

export default HomePage;
