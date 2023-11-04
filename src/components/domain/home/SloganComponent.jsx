import Box from '@mui/material/Box';
import AttachedWord from '#/components/shared/AttachedWord';

function SloganComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-between  items-center gap-16 py-12 h-max w-full lg:h-[550px]'
    >
      <p className='text-center text-lg lg:text-4xl font-semibold leading-3'>
        &#161;Estamos listos para{' '}
        <span className='block text-2xl font-black'>retar tus ideas&#33;</span>
      </p>

      <Box className=' flex flex-col gap-6 w-64 lg:w-[500px]'>
        <p className='text-xs font-semibold lg:text-base leading-3'>
          A lo largo de este tiempo, hemos trabajado con clientes en diversos
          sectores y hemos tenido la oportunidad de participar en proyectos
          desafiantes.
        </p>

        <p className='text-xs font-semibold lg:text-base leading-3'>
          El arte siempre ha estado presente, por eso al combinar la{' '}
          <AttachedWord>fotograf&iacute;a</AttachedWord> con el{' '}
          <AttachedWord>dise&ntilde;o</AttachedWord> y el{' '}
          <AttachedWord>marketing</AttachedWord>, hemos logrado ampliar nuestra
          perspectiva creativa.
        </p>

        <p className='text-xs font-semibold lg:text-base leading-3'>
          Trabajamos con negocios que busquen{' '}
          <AttachedWord> una experiencia visual &uacute;nica</AttachedWord> que
          eleve su propuesta de valor.
        </p>
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
