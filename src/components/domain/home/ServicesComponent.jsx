import Box from '@mui/material/Box';
import fondo9 from '#/assets/FONDO-9.webp';
import flechaImage from '#/assets/╓CONO-FLECHA2.png';

function ServicesComponent() {
  return (
    <Box
      sx={style.container}
      id={"Servicios"}
      className="flex flex-col justify-between  items-center gap-8 py-8 aspect-square w-full h-[50vh] min-h-[400px] max-h-[600px] lg:h-[80vh] lg:min-h-[700px] lg:max-h-[900px]"
    >
      <p
        className="text-center text-2xl lg:text-2xl font-medium leading-8 text-white ">
        Conoce nuestros{' '}
        <span
          className="block font-black text-4xl leading-6 uppercase lg:text-6xl">
          servicios
        </span>
      </p>
      <Box className={"w-full flex items-center justify-center h-full"}>
        <Box
          sx={{ backgroundColor: '#ffe9d7', aspectRatio: '2/3' }}
          className={'h-[100%] rounded-2xl relative flex justify-center items-center'}
        >
          <img src={flechaImage}
               className={'w-[32px] h-[32px] absolute left-[-48px]  lg:w-[64px] lg:h-[64px] lg:left-[-100px]'} />

          <img src={flechaImage}
               className={'w-[32px] h-[32px] absolute right-[-48px] rotate-180  lg:w-[64px] lg:h-[64px]  lg:right-[-100px]'} />

        </Box>
      </Box>
      <Box sx={style.button} className="font-black  text-3xl">
        &#161;Cotiza hoy&#33;
      </Box>
    </Box>
  );
}

const style = {
  container: {
    background: `url(${fondo9})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat'
  },
  button: {
    backgroundColor: 'white',
    color: '#222936',
    padding: '12px 32px',
    borderRadius: '8px'
  }
};

export default ServicesComponent;
