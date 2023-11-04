import Box from '@mui/material/Box';

function CompanyComponent() {
  return (
    <Box
      sx={style.container}
      className='flex flex-col justify-between  items-center gap-16 py-16 h-[250px] lg:h-[550px]'
    ></Box>
  );
}

const style = {
  container: {
    width: '100%',
    background:
      'linear-gradient(to bottom left, #f3456b 0 2%, #b188ee 90% 100%)'
  }
};

export default CompanyComponent;
