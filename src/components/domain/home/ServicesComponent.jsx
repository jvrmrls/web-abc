import Box from '@mui/material/Box';

function ServicesComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-between  items-center gap-16 py-8 h-max w-full lg:h-[550px]'
    >
      <p className='text-center text-base lg:text-2xl font-bold leading-4'>
        Conoce nuestros{' '}
        <span className='block font-black text-2xl leading-6 uppercase lg:text-6xl'>
          servicios
        </span>
      </p>
      <Box></Box>
      <Box sx={style.button} className='font-black tracking-wider text-lg'>
        &#161;Cotiza hoy&#33;
      </Box>
    </Box>
  );
}

const style = {
  container: {
    backgroundColor: '#ffe9d7'
  },
  button: {
    backgroundColor: '#222936',
    color: '#ffe9d7',
    padding: '8px 24px',
    borderRadius: '8px'
  }
};

export default ServicesComponent;
