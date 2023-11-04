import Box from '@mui/material/Box';

function OurOwnsGridComponent() {
  return <Box sx={style.container}></Box>;
}

const style = {
  container: {
    height: '100vh',
    maxHeight: '750px',
    width: '100%',
    backgroundColor: '#ffbe37'
  }
};

export default OurOwnsGridComponent;
