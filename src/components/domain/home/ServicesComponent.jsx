import Box from '@mui/material/Box';
import fondo9 from '#/assets/FONDO-9.png';
import flechaImage from '#/assets/╓CONO-FLECHA2.png';

function ServicesComponent() {
  return (
    <Box
      sx={style.container}
      className="flex flex-col justify-between  items-center gap-8 py-8 aspect-square w-full lg:h-[550px]"
    >
      <p
        className="text-center text-2xl lg:text-2xl font-medium leading-8 text-white ">
        Conoce nuestros{' '}
        <span
          className="block font-black text-4xl leading-6 uppercase lg:text-6xl">
          servicios
        </span>
      </p>
      <Box className={"w-full flex items-center justify-center"}>
        <Box
          sx={{ backgroundColor: '#ffe9d7', aspectRatio: '2/3' }}
          className={'w-2/4 rounded-2xl relative flex justify-center items-center'}
        >
          <img src={flechaImage}
               className={'w-[40px] h-[40px] absolute left-[-60px]'} />

          <img src={flechaImage}
               className={'w-[40px] h-[40px] absolute right-[-60px] rotate-180'} />

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
