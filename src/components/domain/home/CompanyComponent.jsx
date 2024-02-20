import Box from '@mui/material/Box';
import spaceImage from '#/assets/╓CONO.png';
import TopBarDesktopContainer
  from '#/components/domain/home/others/TopBarDesktopContainer.jsx';
import logoAbc from '#/assets/LOGO-ABC.png'
function CompanyComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-center  items-center gap-4 py-16 h-[250px] lg:h-[75vh] relative '
    >
      <img
        src={logoAbc}
        className={"block lg:hidden w-[60px] absolute top-3"}
        alt="logo"
      />
      <p className='text-center text-2xl lg:text-7xl font-semibold leading-6'>
        &#161;Estamos listos para{' '}
        <span className='block text-4xl lg:text-9xl font-black'>retar tus ideas&#33;</span>
      </p>
      <Box
        sx={style?.divider}
      />
      <img
        src={spaceImage}
        alt='space'
        className='absolute bottom-[-15px] right-[0px] w-[180px] rotate-180 z-40 opacity-70 lg:w-[500px] lg:bottom-[-130px] lg:right-[250px] lg:z-40'
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
