import { Container } from '@mui/material';
// import { useEffect } from 'react';
// import { useUIState } from '#/hooks/UIState.js';
import CompanyComponent from '#/components/domain/home/CompanyComponent.jsx';
import SloganComponent from '#/components/domain/home/SloganComponent.jsx';
import OurOwnsVerticalComponent from '#/components/domain/home/OurOwnsVerticalComponent.jsx';
import OurOwnsGridComponent from '#/components/domain/home/OurOwnsGridComponent.jsx';
import MeetComponent from '#/components/domain/home/MeetComponent.jsx';
import ServicesComponent from '#/components/domain/home/ServicesComponent.jsx';
import TeamComponent from '#/components/domain/home/TeamComponent.jsx';
import ClientsComponent from '#/components/domain/home/ClientsComponent.jsx';
import FooterComponent from '#/components/domain/home/FooterComponent.jsx';
import MissionVissionComponent from '#/components/domain/home/MissionVissionComponent.jsx';
import TopBarDesktopContainer from '#/components/domain/home/others/TopBarDesktopContainer.jsx';
import V2GeneralComponent from '#/components/domain/home/V2GeneralComponent.jsx';
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
      {/* <TopBarDesktopContainer /> */}
      {/* <CompanyComponent /> */}
      <SloganComponent />
      <DescribeComponent />
      {/* <MissionVissionComponent /> */}
      {/* <OurOwnsVerticalComponent /> */}
      {/*<OurOwnsGridComponent />*/}
      {/* <MeetComponent /> */}
      <ServicesComponent />
      <ContactComponent />
      <WhatsappAndQR />
      {/* <ClientsComponent /> */}
      {/* <TeamComponent /> */}
      <TermsAndConditions />
      {/* <FooterComponent />/ */}
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
