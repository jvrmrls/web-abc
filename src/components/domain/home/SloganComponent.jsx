import Box from '@mui/material/Box';
import AttachedWord from '#/components/shared/AttachedWord';
import comillasImage from '#/assets/comillas.png';
import Image12 from '#/assets/v2/12.png';

function SloganComponent() {
  return (
    <Box
      sx={style.container}
      id={'Conócenos'}
      className='flex flex-col justify-center  items-center gap-10 py-12 h-max w-full lg:min-h-[500px] relative -z-30'
    >
      <img
        src={Image12}
        alt='comillas'
        className='absolute w-[300px] top-[-40px] left-[-80px] lg:left-[150px] rotate-180  lg:w-[450px] lg:top-[-100px] opacity-15'
      />
      <img
        src={Image12}
        alt='comillas'
        className='absolute  w-[300px]  bottom-[-60px] right-[-65px] -z-20  lg:right-[100px] lg:w-[450px] lg:bottom-[-100px] opacity-15'
      />
      <h2 className='text-center text-3xl lg:text-6xl font-black leading-3 mt-2 z-20'>
        &#161;Con&oacute;cenos!
      </h2>

      <Box className=' flex flex-col gap-4 w-2/3 lg:w-[550px]'>
        <h4 className='text-sm font-regular lg:text-2xl leading-4 z-20 lg:font-bold  '>
          A lo largo de este tiempo,{' '}
          <span className='font-bold '>
            hemos trabajado con clientes en diversos sectores
          </span>{' '}
          y hemos tenido la oportunidad de participar en proyectos desafiantes.
        </h4>

        <h4 className='text-sm font-regular lg:text-2xl leading-4 z-20 lg:font-bold  '>
          El arte siempre ha estado presente, por eso al combinar{' '}
          <span className='font-bold '>
            la fotograf&iacute;a con el dise&ntilde;o y el marketing
          </span>{' '}
          hemos logrado ampliar nuestra perspectiva creativa.
        </h4>

        <h4 className='text-sm font-regular lg:text-2xl leading-4 z-20 lg:font-bold '>
          Trabajamos con negocios que{' '}
          <span className='font-bold '>
            busquen una experiencia visual &uacute;nica
          </span>{' '}
          que eleve su propuesta de valor.
        </h4>
      </Box>
    </Box>
  );
}

const style = {
  container: {
    backgroundColor: '#ffe9d7'
  },
  title: {
    width: '100%',
    maxWidth: '400px',
    // letterSpacing: '-1px',
    lineHeight: '0.4'
  }
};

export default SloganComponent;
