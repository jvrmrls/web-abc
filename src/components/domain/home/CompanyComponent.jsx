import Box from '@mui/material/Box';
import spaceImage from '#/assets/╓CONO.png';
import TopBarDesktopContainer
  from '#/components/domain/home/others/TopBarDesktopContainer.jsx';

function CompanyComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-center  items-center gap-4 py-16 h-[250px] lg:h-[90vh] relative -z-40'
    >

      <p className='text-center text-2xl lg:text-6xl font-semibold leading-6'>
        &#161;Estamos listos para{' '}
        <span className='block text-4xl lg:text-8xl font-black'>retar tus ideas&#33;</span>
      </p>
      <Box
        sx={style?.divider}
      />
      <img
        src={spaceImage}
        alt='space'
        className='absolute bottom-[-15px] right-[0px] w-[180px] rotate-180 z-20 opacity-70 lg:w-[400px] lg:bottom-[-50px] lg:right-[30vw] '
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
    width: '30%',
    minWidth: "150px",
    maxWidth: '400px',
    height: '3px',
    backgroundColor: 'white'
  }
};

export default CompanyComponent;
