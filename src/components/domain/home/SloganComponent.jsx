import Box from '@mui/material/Box';
import AttachedWord from '#/components/shared/AttachedWord';
import comillasImage from '#/assets/comillas.png';

function SloganComponent() {
  return (
    <Box
      sx={style.container}
      id={"Conócenos"}
      className="flex flex-col justify-center  items-center gap-10 py-12 h-max w-full lg:h-[700px] relative -z-30"
    >
      <img src={comillasImage} alt="comillas"
           className="absolute top-[-50px] left-[-120px] lg:left-[20vw] lg:w-[750px] lg:top-[-120px]" />
      <img src={comillasImage} alt="comillas"
           className="absolute bottom-[-90px] right-[-120px] -z-20 rotate-180 lg:right-[20vw] lg:w-[750px] lg:bottom-[-220px]" />
      <p className="text-center text-3xl lg:text-4xl font-black leading-3 mt-2 z-20">
        &#161;Con&oacute;cenos!
      </p>

      <Box className=" flex flex-col gap-4 w-2/3 lg:w-[500px]">
        <p className="text-sm font-semibold lg:text-base leading-4 z-20">
          A lo largo de este tiempo, hemos trabajado con clientes en diversos
          sectores y hemos tenido la oportunidad de participar en proyectos
          desafiantes.
        </p>

        <p className="text-sm font-semibold lg:text-base leading-4 z-20">
          El arte siempre ha estado presente, por eso al combinar la{' '}
          <AttachedWord>fotograf&iacute;a</AttachedWord> con el{' '}
          <AttachedWord>dise&ntilde;o</AttachedWord> y el{' '}
          <AttachedWord>marketing</AttachedWord>, hemos logrado ampliar nuestra
          perspectiva creativa.
        </p>

        <p className="text-sm font-semibold lg:text-base leading-4 z-20">
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
