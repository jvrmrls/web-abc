import { Box } from '@mui/material';
import SanMiguelImage from '#/assets/v2/sanmiguel.jpg';
import Image9 from '#/assets/v2/9.webp';

const CityComponentV2 = () => {
  return (
    <Box className='w-full  relative -Z-20'>
      <img
        src={Image9}
        alt='Decorative'
        className='absolute rotate-180   w-[250px] opacity-40 top-[-110px] left-[-118px] z-[200]  lg:w-[500px] lg:top-[-280px]
        '
      />
      <img src={SanMiguelImage} alt='San Miguel' className='w-full z-[200]' />
    </Box>
  );
};

export default CityComponentV2;
