import Box from '@mui/material/Box';

function MeetComponent() {
  return (
    <Box sx={{ backgroundColor: '#f3456b'}}
         className='flex flex-col justify-center  items-center gap-16 py-8 h-[90px] w-full lg:h-[120px]'
    >
      <Box component={"p"} sx={{ backgroundColor: '#222936', color: '#ffe9d7' }}
           className="text-center text-xl lg:text-2xl font-extrabold leading-3 py-3 px-4 rounded-md">
        &#191; Agendamos una reuni&oacute;n &#63;
      </Box>
    </Box>
  );
}


export default MeetComponent;
