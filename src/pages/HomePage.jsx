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
import MissionVissionComponent
  from '#/components/domain/home/MissionVissionComponent.jsx';

const HomePage = () => {
  // const ui = useUIState();

  // useEffect(() => {
  //   ui.setTitle('Home');
  // }, []);

  return (
    <Container sx={style.container}>
      <CompanyComponent />
      <SloganComponent />
      <MissionVissionComponent />
      <OurOwnsVerticalComponent />
      <OurOwnsGridComponent />
      <MeetComponent />
      <ServicesComponent />
      <ClientsComponent />
      <TeamComponent />
      <FooterComponent />
    </Container>
  );
};

const style = {
  container: {
    width: '100%'
  }
};

export default HomePage;
