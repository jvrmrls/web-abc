import Box from '@mui/material/Box';

function TeamComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-between  items-center py-6  h-[220px] w-full lg:h-[550px]'
    >
      <p className='text-2xl font-bold text-center leading-3'>
        Equipo{' '}
        <span
          className='block font-black text-3xl uppercase font-outline-2'
          style={style.text}
        >
          creativo
        </span>
      </p>
      <Box></Box>
      <Box className={"w-3/4 min-w-[250px] mx-auto"}>
        <p className={"text-xs text-center leading-3"}>
          Contamos con <span className='font-bold'>personal capacitado</span> para <br />
          brindarte la mejor <span className='font-bold'>experiencia</span> y la mejor <span className='font-bold'>calidad </span> <br />
          en cada uno de nuestros servicios.
        </p>
      </Box>
    </Box>
  );
}

const style = {
  container: {
    backgroundColor: '#ffbe37'
  },
  text: {
    '-webkit-text-stroke': '1px #222936',
    '-webkit-text-fill-color': '#ffbe37'
  }
};

export default TeamComponent;
