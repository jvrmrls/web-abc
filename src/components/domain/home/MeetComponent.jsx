import Box from '@mui/material/Box';

function MeetComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-between  items-center gap-16 py-16 h-[180px] w-full lg:h-[300px]'
    >
      <p className='text-center text-xl lg:text-2xl font-extrabold leading-3'>
        &#191; Agendamos una reuni&oacute;n &#63;
      </p>
    </Box>
  );
}

const style = {
  container: {
    backgroundColor: '#ffbe37'
  }
};

export default MeetComponent;
