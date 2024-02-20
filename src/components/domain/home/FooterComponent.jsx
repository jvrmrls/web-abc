import Box from '@mui/material/Box';
import redesImage from '#/assets/╓CONOS-REDES.png';

function FooterComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-center gap-2  items-center py-6  min-h-[220px] w-full lg:min-h-[450px]'
    >
      <Box className={"lg:text-center"}>
        <p
          className="text-base font-medium text-center leading-none w-[180px] lg:w-[60%] mx-auto lg:text-5xl">
          Somos los locos que creen que pueden{' '}
        </p>
        <span
          className="block font-black text-3xl  lg:text-8xl">retar al mundo</span>
      </Box>
      <img src={redesImage} alt="redes" className="w-1/3 max-w-[200px]" />

      <Box
        sx={style?.divider}
      />
      <Box className={'w-full text-center flex flex-col gap-0 font-normal'}>
        <p className={'text-sm m-0 p-0 lg:text-base'}>
          San Miguel, El Salvador.
        </p>
        <span className={'text-xs m-0 p-0 font-normal lg:text-base'}>
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
    maxWidth: '300px',
    height: '2px',
    opacity: 0.5,
    backgroundColor: 'white'
  }
};

export default FooterComponent;
