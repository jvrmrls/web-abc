import Box from '@mui/material/Box';
import { useEffect, useState, Suspense, lazy } from 'react';
import Logo1 from '#/assets/logos/1.png';
import Logo2 from '#/assets/logos/2.png';
import Logo3 from '#/assets/logos/3.png';
import Logo4 from '#/assets/logos/4.png';
import Logo5 from '#/assets/logos/5.png';
import Logo6 from '#/assets/logos/6.png';
import Logo7 from '#/assets/logos/7.png';
import Logo8 from '#/assets/logos/8.png';
import Logo9 from '#/assets/logos/9.png';
import Logo10 from '#/assets/logos/10.png';
import Logo11 from '#/assets/logos/11.png';
import Logo12 from '#/assets/logos/12.png';
import Logo13 from '#/assets/logos/13.png';
import Logo14 from '#/assets/logos/14.png';
import Logo15 from '#/assets/logos/15.png';
import Logo16 from '#/assets/logos/16.png';
import Logo17 from '#/assets/logos/17.png';
import Logo18 from '#/assets/logos/18.png';
import Logo19 from '#/assets/logos/19.png';
import Logo20 from '#/assets/logos/20.png';
import Logo21 from '#/assets/logos/21.png';
import Logo22 from '#/assets/logos/22.png';
import Logo23 from '#/assets/logos/23.png';
import { AnimatePresence, motion } from 'framer-motion';


const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10, Logo11, Logo12, Logo13, Logo14, Logo15, Logo16, Logo17, Logo18, Logo19, Logo20, Logo21, Logo22, Logo23];
const logosPerPage = 6;

function ClientsComponent() {
  const [logosToShow, setLogosToShow] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogosToShow((currentLogosToShow) => {
        let newLogosToShow;
        let newIndex;

        if (currentLogosToShow.length === logosPerPage) {
          newLogosToShow = [];
          newIndex = index;
        } else {
          newLogosToShow = [...currentLogosToShow, logos[index]];
          newIndex = index + 1;
        }
        if(newIndex >= logos.length) {
          newIndex = 0;
        }
        setIndex(newIndex);
        return newLogosToShow;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Box
      sx={style.container}
      className='flex flex-row justify-between  items-center  h-[320px] w-full lg:h-[650px]'
    >
      <Box className='h-full w-1/2 px-6 flex justify-center items-center'>
        <Box className={"w-[100%] lg:w-[60%]"}>
          <p className="text-lg font-semibold lg:text-5xl">
            Estas son algunas marcas que han
            <span className="block font-black text-2xl  lg:text-7xl">
            confiado en nosotros.
          </span>
          </p>
        </Box>
      </Box>
      <Box sx={style.subcontainer}
           className="h-full w-1/2 py-12 grid grid-cols-2 grid-rows-3 gap-8 px-6 justify-center items-center lg:px-16 lg:gap-4">

         {logosToShow.map((Logo, index) => (
           <motion.img
             key={index}
             src={Logo}
             alt={`Logo ${index}`}
             className='w-full h-auto lg:h-full lg:w-auto mx-auto'
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
           />
         ))}
      </Box>
    </Box>
  );
}

const style = {
  container: {
    backgroundColor: '#ffe9d7'
  },
  subcontainer: {
    backgroundColor: '#f3456b'
  },
  button: {
    backgroundColor: '#222936',
    color: '#ffe9d7',
    padding: '8px 24px',
    borderRadius: '8px'
  }
};

export default ClientsComponent;
