import Box from '@mui/material/Box';

function ClientsComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-row justify-between  items-center  h-[220px] w-full lg:h-[550px]'
    >
      <Box className='h-full w-1/2 px-6 flex justify-center items-center'>
        <p className='text-sm font-semibold leading-4'>
          Estas son algunas marcas que han
          <span className='block font-black text-xl leading-5'>
            confiado en nosotros.
          </span>
        </p>
      </Box>
      <Box sx={style.subcontainer} className='h-full w-1/2'></Box>
    </Box>
  );
}

const style = {
  container: {
    backgroundColor: '#ffe9d7'
  },
  subcontainer: {
    backgroundColor: '#b188ee'
  },
  button: {
    backgroundColor: '#222936',
    color: '#ffe9d7',
    padding: '8px 24px',
    borderRadius: '8px'
  }
};

export default ClientsComponent;
