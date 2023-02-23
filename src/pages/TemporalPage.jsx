import { Box, Button, Typography } from '@mui/material';

export default function TemporalPage() {
  const handleClick = () => {
    window.open(
      'https://wa.me/message/5FCXM2MCRSMPM1',
      '_blank',
    );
  };
  const handleClickFacebook = () => {
    window.open('https://www.facebook.com/abc.com.sv', '_blank');
  };
  const handleClickInstagram = () => {
    window.open('https://www.instagram.com/abc.com.sv', '_blank');
  };
  const handleClickTiktok = () => {
    window.open('https://www.tiktok.com/@abc.com.sv', '_blank');
  };
  

  return (
    <Box sx={style.container}>
      <Box sx={style.subcontainer}>
        <Button
          variant="contained"
          sx={style.btnWhatsapp}
          onClick={handleClick}
        >
          WhatsApp
        </Button>
        <Box sx={style.containerSocial}>
          <Box component="img" src="/images/facebook.svg" alt="facebook" onClick={handleClickFacebook} />
          <Box component="img" src="/images/instagram.svg" alt="instagram" onClick={handleClickInstagram}  />
          <Box component="img" src="/images/tiktok.svg" alt="tiktok"  onClick={handleClickTiktok} />
        </Box>
      </Box>
    </Box>
  );
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  subcontainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: {
      xs: 'url(/images/WEB-ABC-2.png)',
      lg: 'url(/images/WEB-ABC-1.png)',
    },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    aspectRatio: '16/9',
    width: { xs: '100%', md: '900px', lg: '1400px' },
    height: { xs: '550px', md: '950px', lg: '800px' },
  },
  btnWhatsapp: {
    position: 'absolute',
    bottom: { xs: '230px', md: '375px', lg: '310px' },
    fontFamily: 'Fieldwork',
    textTransform: 'none',
    fontSize: { xs: '16px', md: '32px', lg: '40px' },
    py: 0,
    fontWeight: 700,
    width: { xs: '150px', md: '250px', lg: '380px' },
  },
  containerSocial: {
    position: 'absolute',
    bottom: { xs: '190px', md: '325px', lg: '260px' },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      height: { xs: '28px', md: '40px', lg: '40px' },
      width: { xs: '28px', md: '40px', lg: '40px' },
      cursor: 'pointer',
    },
  },
};
