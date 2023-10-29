import SemiBold18 from '#/components/shared/typography/SemiBold18';
// import GoBackIcon from '#/components/shared/GoBackIcon';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

function DefaultTopBar({ title }) {
  return (
    <Box>
      <Fade
        in={true}
        timeout={{
          enter: 500,
          exit: 0
        }}
      >
        <Toolbar>
          {/* <GoBackIcon /> */}
          <Box />
          {title && <SemiBold18 className='text-center'>{title}</SemiBold18>}
        </Toolbar>
      </Fade>
    </Box>
  );
}

export default DefaultTopBar;
