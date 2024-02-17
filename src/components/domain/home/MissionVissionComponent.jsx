import Box from '@mui/material/Box';

function MissionVissionComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-between  items-center py-12 gap-6  min-h-[220px] w-full lg:min-h-[80vh] -z-40 relative'
    >
      <Box className={"w-full flex flex-col items-center justify-center gap-4 lg:w-1/3"}>
        <p
          className='text-lg text-center leading-3 w-[140px] lg:w-[400px] lg:text-5xl font-black'>
          Misi&oacute;n
        </p>
        <p className='text-[8px] font-normal text-center leading-4 max-w-[70vw] lg:text-base'>
          ABC Marketing Digital es una agencia que busca desafiar las ideas, ofrecer
          propuestas de valor y proveer soluciones completas en dise&ntilde;o para
          mejorar el posicionamiento de una marca, servicio o producto que las
          empresas quieren posicionar, con procesos claros y definidos, todo con
          el fin de optimizar la productividad y competitividad de las empresas.
        </p>
      </Box>
      <Box className={"w-full flex flex-col items-center justify-center gap-4  lg:w-1/3"}>
        <p
          className='text-lg text-center leading-3 w-[140px] lg:w-[400px] font-black lg:text-5xl'>
          Visi&oacute;n
        </p>
        <p className='text-[8px] font-normal text-center leading-4 max-w-[70vw] lg:text-base'>
          Ser un referente como agencia de publicidad y marketing digital, estar continuamente a la vanguardia
          y poder ayudar a empresarios y emprendedores a cumplir sus metas y alcanzar la cima de su sector.
        </p>
      </Box>
      <Box className={"w-full flex flex-col items-center justify-center gap-4 lg:w-1/3 "}>
        <p
          className='text-lg text-center leading-3 w-[140px] lg:w-[400px] font-black lg:text-5xl'>
          Valores
        </p>
        <p className='text-[8px] font-normal text-center leading-4 max-w-[70vw] lg:text-base '>
          Abc se enfoca en la calidad, para la cual nos dedicamos a producir
          constantemente resultados que cumplan las expectativas de nuestros
          clientes, partiendo de la integridad y el respeto dentro de nuestro
          equipo y con las empresas que trabajamos.
        </p>
      </Box>
    </Box>
  );
}

const style = {
  container: {
    backgroundColor: '#222936',
    color: '#ffe9d7'
  }
};

export default MissionVissionComponent;
