import { Box } from '@mui/material';
import Image8 from '#/assets/v2/8.webp';

const FooterComponentV2 = () => {
  return (
    <Box
      sx={style.container}
      className='w-full flex justify-center items-center py-16 lg:py-24 h-[200px] lg:h-[300px] '
    >
      <img
        src={Image8}
        alt='Imagen de fondo para el pie de página con las redes sociales de ABC'
        className='w-[300px] lg:w-[400px]'
      />
    </Box>
  );
};

const style = {
  container: {
    backgroundColor: '#222936'
  }
};

export default FooterComponentV2;
