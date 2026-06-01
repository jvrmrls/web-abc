import { Box } from '@mui/material';
import LogoAbc from '#/assets/LOGO-ABC.png';
import Image2 from '#/assets/v2/2.png';
import Image1 from '#/assets/v2/1.png';
import Image15 from '#/assets/v2/15.png';

const CompanyComponentV2 = () => {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-start relative items-center gap-0 py-2 aspect-square w-full h-[300px] lg:h-[90vh] lg:min-h-[500px] -z-30'
    >
      <img src={LogoAbc} alt='Logo ABC' className='w-[70px] lg:w-[200px]' />
      <Box className='relative'>
        <img
          src={Image2}
          alt='Imagen de buscador con texto "Necesito hacer crecer mi marca"'
          className='w-[250px] lg:w-[500px]'
        />
        <img
          src={Image15}
          alt='Imagen decorativa'
          className='absolute h-[50px] right-[15px]  bottom-[-45px] lg:h-[80px] lg:right-[30px] lg:bottom-[-70px]'
          style={{ transform: 'scaleX(-1)' }}
        />
      </Box>

      <img
        src={Image1}
        alt='Imagen de "Haz llegado al lugar indicado"'
        className='w-[250px] lg:w-[700px]'
      />
    </Box>
  );
};

const style = {
  container: {
    // background: `url(${fondo9})`,
    // backgroundSize: 'contain',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'repeat'
  }
};

export default CompanyComponentV2;
