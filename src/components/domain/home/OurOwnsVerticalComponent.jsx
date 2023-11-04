import Box from '@mui/material/Box';
function OurOwnsVerticalComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-between  items-center gap-16 py-16 h-max w-full lg:h-[550px]'
    >
      <p className='text-center text-base font-semibold lg:text-lg'>
        Conoce nuestro{' '}
        <span className='block font-black text-4xl leading-6 lg:text-6xl'>
          trabajo
        </span>
      </p>
      <Box></Box>
    </Box>
  );
}

const style = {
  container: {
    height: '100vh',
    maxHeight: '750px',
    width: '100%',
    backgroundColor: '#b188ee'
  }
};

export default OurOwnsVerticalComponent;
