import Box from '@mui/material/Box';
import spaceImage from '#/assets/╓CONO.png';
import flechaImage from '#/assets/╓CONO-FLECHA.png';
function OurOwnsVerticalComponent() {
  return (
    <>
      <Box
        sx={style.containerSmallText}
        className='flex flex-col justify-center items-center relative'
      >
        <p className='text-center text-base font-semibold lg:text-lg'>
          Conoce nuestro{' '}
          <span className='block font-black text-4xl leading-6 lg:text-6xl'>
          trabajo
        </span>
        </p>
        <img
          src={spaceImage}
          alt="space"
          className="absolute bottom-[-80px] left-[-80px] w-[250px]  z-10 opacity-70"
        />
      </Box>
      <Box
        sx={style.container}
        className='flex flex-col justify-center items-center gap-2 py-16 h-max w-full lg:h-[550px]'
      >
        <p className='text-center font-black text-4xl leading-6 lg:text-6xl'>
          Reels
        </p>
        <Box className={'w-full flex flex-row justify-center items-center gap-2 h-full relative'}>
          <img src={flechaImage} className={'w-[40px] h-[40px] absolute left-[12px]'} />
          <Box
            sx={style?.content}
          />
          <img src={flechaImage} className={'w-[40px] h-[40px] absolute right-[12px] rotate-180'} />
        </Box>
      </Box>
      <Box
        sx={style.container2}
        className='flex flex-col justify-center items-center gap-6 py-16 h-max w-full lg:h-[550px]'
      >
        <p className='text-center font-black text-3xl leading-6 lg:text-6xl'>
          Fotograf&iacute;a Publicitaria
        </p>
        <Box
          className={'w-full flex flex-row justify-center items-center gap-2 h-full relative'}>
          <img src={flechaImage}
               className={'w-[40px] h-[40px] absolute left-[12px]'} />
          <Box
            sx={style?.content2}
          />
          <img src={flechaImage}
               className={'w-[40px] h-[40px] absolute right-[12px] rotate-180'} />
        </Box>
      </Box>
      <Box
        sx={{ ...style.container2, bgcolor: '#ffbe37' }}
        className='flex flex-col justify-center items-center gap-6 py-16 h-max w-full lg:h-[550px]'
      >
        <p className='text-center font-black text-3xl leading-6 lg:text-6xl'>
          Fotograf&iacute;a Social
        </p>
        <Box
          className={'w-full flex flex-row justify-center items-center gap-2 h-full relative'}>
          <img src={flechaImage}
               className={'w-[40px] h-[40px] absolute left-[12px]'} />
          <Box
            sx={{ ...style?.content2, bgcolor: '#ffe9d7'}}
          />
          <img src={flechaImage}
               className={'w-[40px] h-[40px] absolute right-[12px] rotate-180'} />
        </Box>
      </Box>
      <Box
        sx={style.container3}
        className='flex flex-col justify-center items-center gap-6 py-16 h-max w-full lg:h-[550px]'
      >
        <p className='text-center font-black text-3xl leading-6 lg:text-6xl'>
          Producci&oacute;n Audiovisual
        </p>
        <Box
          className={'w-full flex flex-row justify-center items-center gap-2 h-full relative'}>
          <img src={flechaImage}
               className={'w-[40px] h-[40px] absolute left-[12px]'} />
          <Box
            sx={style?.content3}
          />
          <img src={flechaImage}
               className={'w-[40px] h-[40px] absolute right-[12px] rotate-180'} />
        </Box>
      </Box>

    </>
  );
}

const style = {
  container: {
    height: '80vh',
    minHeight: '550px',
    maxHeight: '750px',
    width: '100%',
    backgroundColor: '#b188ee'
  },
  container2: {
    height: '60vh',
    minHeight: '480px',
    maxHeight: '650px',
    width: '100%',
    backgroundColor: '#ffe9d7'
  },
  container3: {
    height: '30vh',
    minHeight: '250px',
    maxHeight: '520px',
    width: '100%',
    backgroundColor: '#f3456b'
  },
  containerMeeting: {
    backgroundColor: '#f3456b'
  },
  containerSmallText: {
    height: '90px',
    width: '100%',
    backgroundColor: '#ffe9d7'
  },
  content: {
    aspectRatio: '9/16',
    height: '90%',
    backgroundColor: '#ffe9d7'
  },
  content2: {
    aspectRatio: '3/4',
    width: '70%',
    backgroundColor: '#222936'
  },
  content3:{
    aspectRatio: '16/9',
    width: '70%',
    backgroundColor: '#ffe9d7'
  }
};

export default OurOwnsVerticalComponent;
