import { Box } from '@mui/material';
import Image6 from '#/assets/v2/6.png';

const WhatsappAndQR = () => {
  return (
    <Box
      sx={style.container}
      className='w-full flex justify-center items-center py-16 lg:py-24 h-[200px] lg:h-[300px] '
    >
      <img
        src={Image6}
        alt='Imagen de contacto por Whatsapp y código QR'
        className='w-full lg:w-[700px]'
      />
    </Box>
  );
};

const style = {
  container: {
    backgroundColor: '#ffe9d7'
  }
};

export default WhatsappAndQR;
