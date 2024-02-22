import Box from '@mui/material/Box';
import { useEffect, useState, Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const logos = [
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221201429_abc-client-logo-1.png.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221201558_abc-client-logo-2.png.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221201734_abc-client-logo-3.png.3",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221201813_abc-client-logo-4.png.4",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221201852_abc-client-logo-5.png.5",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221202138_abc-client-logo-6.png.6",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221202222_abc-client-logo-7.png.7",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221202341_abc-client-logo-8.",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221202428_abc-client-logo-9.png.",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203157_abc-client-logo-9.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203249_abc-client-logo-11.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203310_abc-client-logo-12.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203326_abc-client-logo-13.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203344_abc-client-logo-14.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203403_abc-client-logo-15.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203428_abc-client-logo-16.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203444_abc-client-logo-17.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203500_abc-client-logo-18.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203514_abc-client-logo-19.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203525_abc-client-logo-19.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203542_abc-client-logo-21.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203556_abc-client-logo-22.png",
  "https://s3.us-east-2.amazonaws.com/mome.cloud/20240221203615_abc-client-logo-23.png"
]

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
             loading={'lazy'}
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
