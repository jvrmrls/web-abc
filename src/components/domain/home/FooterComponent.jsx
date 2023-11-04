import Box from '@mui/material/Box';

function FooterComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-between  items-center py-6  h-[220px] w-full lg:h-[550px]'
    >
      <p className='text-sm text-center leading-3 w-[140px] lg:w-[400px] lg:text-base'>
        Somos los locos que creen que pueden{' '}
        <span className='block font-black text-xl  '>retar el mundo</span>
      </p>
      <Box></Box>
    </Box>
  );
}

const style = {
  container: {
    backgroundColor: '#222936',
    color: '#ffe9d7'
  }
};

export default FooterComponent;
