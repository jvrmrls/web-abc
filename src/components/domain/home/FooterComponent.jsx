import Box from '@mui/material/Box';
import redesImage from '#/assets/╓CONOS-REDES.png';

function FooterComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-center gap-2  items-center py-6  min-h-[220px] w-full lg:h-[550px]'
    >
      <p className='text-sm text-center leading-3 w-[140px] lg:w-[400px] lg:text-base'>
        Somos los locos que creen que pueden{' '}
        <span className='block font-black text-xl  '>retar el mundo</span>
      </p>
      <img src={redesImage} alt='redes' className='w-1/4 max-w-[250px]' />

      <Box
        sx={style?.divider}
      />
      <Box className={"w-full text-center flex flex-col gap-0 font-normal"}>
        <p className={'text-xs m-0 p-0'}>
          San Miguel, El Salvador.
        </p>
        <span className={'text-[9px] m-0 p-0 font-light'}>
        &#169; copyrigth {new Date().getFullYear()} - <span
          className={''}>ABC Marketing Digital</span>
      </span>
      </Box>
      <Box></Box>
    </Box>
  );
}

const style = {
  container: {
    backgroundColor: '#222936',
    color: '#ffe9d7'
  },
  divider: {
    width: '30%',
    minWidth: '150px',
    height: '2px',
    opacity: 0.5,
    backgroundColor: 'white'
  }
};

export default FooterComponent;
