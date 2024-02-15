import Box from '@mui/material/Box';
import spaceImage from '#/assets/╓CONO.png';

function CompanyComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-center  items-center gap-4 py-16 h-[250px] lg:h-[550px] relative'
    >
      <p className='text-center text-2xl lg:text-4xl font-semibold leading-6'>
        &#161;Estamos listos para{' '}
        <span className='block text-4xl font-black'>retar tus ideas&#33;</span>
      </p>
      <Box
        sx={style?.divider}
      />
      <img
        src={spaceImage}
        alt='space'
        className='absolute bottom-[-50px] w-[180px] rotate-180 z-10'
        />
    </Box>
  );
}

const style = {
  container: {
    width: '100%',
    background:
      'linear-gradient(to bottom left, #f3456b 0 2%, #b188ee 90% 100%)'
  },
  divider: {
    width: '40%',
    minWidth: "200px",
    height: '3px',
    backgroundColor: 'white'
  }
};

export default CompanyComponent;
