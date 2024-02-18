import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useState } from 'react';
import logoAbc from '#/assets/LOGO-ABC.png';
import { Link } from '@mui/material';

const pages = ['Conócenos', 'Nuestro Trabajo', 'Servicios', 'Equipo Creativo'];
const TopBarDesktopContainer = ()=>{

  const handleClickLogo = () => {
    //scroll to top
    window.scrollTo(0, 0);
  }

  return (
    <AppBar position="fixed" color="transparent" className={"top-0"} sx={{ display: {xs:'none', lg: 'block'}, backgroundColor: 'rgba(0, 0, 0, 0.1)', color: '#ffe9d7',}}>
      <Container maxWidth="xl">
        <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: { xs: 1, lg: 8 },

        }}>
          <img
            src={logoAbc}
            alt="logo"
            className="w-[48px] lg:w-[120px] cursor-pointer"
            onClick={handleClickLogo}
          />
          <Box className={"flex-grow flex justify-end gap-4"}>
            {pages.map((page) => (
              <Link
                key={page}
                href={`#${page}`}
                sx={{ my: 2, color: '#ffe9d7', display: 'block', zIndex: '100', textDecoration: 'none'}}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default TopBarDesktopContainer;