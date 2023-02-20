import { Box, Button } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function LayoutPage() {
  return (
    <>
      {/* <Box component="header" sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Login</Button>
        </Box>
      </Box> */}
      {/* <Box component="main" sx={{ flexGrow: 1 }}> */}
      <Outlet />
      {/* </Box> */}
    </>
  );
}
