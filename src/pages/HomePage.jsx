import { Container } from '@mui/material';
import SemiBold14 from '#/components/shared/typography/SemiBold14.jsx';
import Regular16 from '#/components/shared/typography/Regular16.jsx';
import { useEffect } from 'react';
import { useUIState } from '#/hooks/UIState.js';

const HomePage = () => {
  const ui = useUIState();

  useEffect(() => {
    ui.setTitle('Home');
  }, []);

  return (
    <Container>
      <SemiBold14>Home Page</SemiBold14>
      <Regular16>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia
      </Regular16>
    </Container>
  );
};

export default HomePage;
