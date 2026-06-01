import { Box } from '@mui/material';
import AttachedWord from '#/components/shared/AttachedWord';
import Image9 from '#/assets/v2/9.png';
import Image15 from '#/assets/v2/15.png';

const DescribeComponent = () => {
  return (
    <Box
      className='w-full flex flex-col items-center justify-center h-[450px] relative  rounded-2xl p-4 lg:p-8 text-center text-sm lg:text-2xl font-medium
        lg:h-[700px]
    '
    >
      <img
        src={Image9}
        alt='Decorative'
        className='absolute rotate-180   w-[250px] lg:w-[500px] opacity-40 top-[0px] left-[-115px] z-[200]'
      />
      <Box className='w-[250px] lg:w-[500px] mx-auto gap-0'>
        <AttachedWord
          bgcolor='#ffe9d7'
          color='#252535'
          component='span'
          className='px-2 font-black text-2xl lg:text-5xl'
        >
          No creemos en paquetes gen&eacute;ricos
        </AttachedWord>
        <p className='text-lg mt-0 lg:mt-4 lg:text-2xl'>
          Cada negocio tiene objetivos, <br /> necesidades y formas diferentes{' '}
          <br />
          de comunicar.
        </p>
      </Box>
      <Box className='w-[250px] mx-auto gap-0 mt-4 lg:w-[500px] lg:mt-8'>
        <AttachedWord
          bgcolor='#ffe9d7'
          color='#252535'
          className='px-2 font-black text-2xl lg:text-5xl'
        >
          Por eso creamos propuestas personalizadas
        </AttachedWord>
        <p className='text-lg mt-0 lg:mt-4 lg:text-2xl'>
          adaptadas a lo que realmente <br /> necesitas para crecer en redes{' '}
          <br /> sociales y conectar con tu audiencia.
        </p>
      </Box>

      <img
        src={Image15}
        alt='Decorative'
        className='absolute h-[230px] lg:h-[340px] bottom-[-70px] z-[200] left-[20px] lg:bottom-[-100px] lg:left-[290px]'
      />
    </Box>
  );
};

export default DescribeComponent;
