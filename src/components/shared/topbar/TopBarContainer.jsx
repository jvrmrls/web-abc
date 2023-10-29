import HideOnScroll from '#/components/shared/HideOnScroll.jsx';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DefaultTopBar from '#/components/shared/topbar/DefaultTopBar.jsx';
import { useUIState } from '#/hooks/UIState.js';

function TopBarContainer(props) {
  const ui = useUIState();
  // if (pathname === "/profile/add-address") return null;
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color='neutral0'>
          <DefaultTopBar title={ui?.title} />
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}

export default TopBarContainer;
