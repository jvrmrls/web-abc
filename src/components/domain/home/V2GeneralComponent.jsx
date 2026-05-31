import { Box } from '@mui/material';
import logoAbc from '#/assets/LOGO-ABC.png';

const V2GeneralComponent = () => {
  return (
    <Box sx={style.container} className=' gradient-bg'>
      <Box className='flex flex-col justify-center items-center gap-4 py-16 h-[250px] lg:h-[60vh] relative'>
        <img
          src={logoAbc}
          className={'block lg:hidden w-[90px] absolute top-3'}
          alt='logo'
        />
      </Box>
    </Box>
  );
};

const style = {
  container: {
    width: '100%'
  }
};

export default V2GeneralComponent;
