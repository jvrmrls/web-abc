import Box from '@mui/material/Box';

function TeamComponent() {
  return (
    <Box
      sx={style.container}
      id={"Equipo Creativo"}
      className='flex flex-col justify-around lg:justify-center lg:gap-12  items-center py-6 lg:py-10  min-h-[220px] w-full lg:min-h-[650px]'
    >
      <p className='text-2xl font-bold text-center leading-3 lg:text-6xl lg:leading-10'>
        Equipo{' '}
        <span
          className='block font-black text-3xl uppercase font-outline-2 lg:text-8xl '
          style={style.text}
        >
          creativo
        </span>
      </p>
      <Box className={"w-3/4 min-w-[250px] mx-auto"}>
        <p className={"text-xs text-center leading-3 lg:text-lg"}>
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
    WebkitTextStroke: '1px #222936',
    WebkitTextFillColor: '#ffbe37',
  }
};

export default TeamComponent;
