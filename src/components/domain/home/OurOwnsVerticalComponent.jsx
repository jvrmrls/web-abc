import Box from '@mui/material/Box';
import spaceImage from '#/assets/╓CONO.png';
import flechaImage from '#/assets/╓CONO-FLECHA.png';
function OurOwnsVerticalComponent() {
  return (
    <>
      <Box
        sx={style.containerSmallText}
        className='flex flex-col justify-center items-center relative lg:min-h-[20vh]'
      >
        <p className='text-center text-lg font-semibold lg:text-2xl'>
          Conoce nuestro{' '}
          <span className='block font-black text-6xl lg:text-7xl lg:leading-3' style={{lineHeight: '0.8'}}>
          trabajo
        </span>
        </p>
        <img
          src={spaceImage}
          alt="space"
          className="absolute bottom-[-80px] left-[-80px] w-[250px]  z-10 opacity-70 lg:w-[400px] lg:bottom-[-120px] lg:left-[250px]"
        />
      </Box>
      <Box
        sx={{backgroundColor: '#b188ee'}}
        className='flex flex-col justify-center items-center gap-2 py-16 h-[80vh] min-h-[550px] max-h-[750px] w-full lg:h-[100vh]
                    lg:max-h-[800px] lg:min-h-[600px]'
      >
        <p className='text-center font-black text-4xl leading-6 lg:text-6xl'>
          Reels
        </p>
        <Box className={'w-full flex flex-row justify-center items-center gap-2 h-full relative lg:max-w-[600px]'}>
          <img src={flechaImage} className={'w-[32px] h-[32px] absolute left-[12px] lg:w-[64px] lg:h-[64px]'} />
          <Box
            sx={style?.content}
          />
          <img src={flechaImage} className={'w-[32px] h-[32px] absolute right-[12px] rotate-180 lg:w-[64px] lg:h-[64px]'} />
        </Box>
      </Box>
      <Box
        sx={{backgroundColor: '#ffe9d7'}}
        className='flex flex-col justify-center items-center gap-6 py-16 h-[60vh] min-h-[480px] max-h-[650px] w-full lg:h-[100vh]
                   lg:max-h-[800px] lg:min-h-[600px]'
      >
        <p className='text-center font-black text-3xl leading-6 lg:text-6xl'>
          Fotograf&iacute;a Publicitaria
        </p>
        <Box
          className={'w-full flex flex-row justify-center items-center gap-2 h-full relative  lg:max-w-[600px]'}>
          <img src={flechaImage}
               className={'w-[32px] h-[32px] absolute left-[12px] lg:w-[64px] lg:h-[64px]'} />
          <Box
            sx={style?.content2} className={"h-[90%]"}
          />
          <img src={flechaImage}
               className={'w-[32px] h-[32px] absolute right-[12px] rotate-180 lg:w-[64px] lg:h-[64px]'} />
        </Box>
      </Box>
      <Box
        sx={{ bgcolor: '#ffbe37' }}
        className='flex flex-col justify-center items-center gap-6 py-16 h-[60vh] min-h-[480px] max-h-[650px] w-full lg:h-[100vh]
                   lg:max-h-[800px] lg:min-h-[600px]'
      >
        <p className='text-center font-black text-3xl leading-6 lg:text-6xl'>
          Fotograf&iacute;a Social
        </p>
        <Box
          className={'w-full flex flex-row justify-center items-center gap-2 h-full relative  lg:max-w-[600px]'}>
          <img src={flechaImage}
               className={'w-[32px] h-[32px] absolute left-[12px] lg:w-[64px] lg:h-[64px]'} />
          <Box
            sx={{ ...style?.content2, bgcolor: '#ffe9d7'}}
            className={'h-[90%]'}
          />
          <img src={flechaImage}
               className={'w-[32px] h-[32px] absolute right-[12px] rotate-180 lg:w-[64px] lg:h-[64px]'} />
        </Box>
      </Box>
      <Box
        sx={{ backgroundColor: '#f3456b'}}
        className='flex flex-col justify-center items-center gap-6 py-16 h-[30vh] min-h-[280px] max-h-[550px] w-full lg:h-[70vh]
                   lg:max-h-[800px] lg:min-h-[600px]'
      >
        <p className='text-center font-black text-3xl leading-6 lg:text-6xl'>
          Producci&oacute;n Audiovisual
        </p>
        <Box
          className={'w-full flex flex-row justify-center items-center gap-2 h-full relative  lg:max-w-[900px]'}>
          <img src={flechaImage}
               className={'w-[32px] h-[32px] absolute left-[12px] lg:w-[64px] lg:h-[64px]'} />
          <Box
            sx={style?.content3}
            className={"w-[70%]"}
          />
          <img src={flechaImage}
               className={'w-[32px] h-[32px] absolute right-[12px] rotate-180 lg:w-[64px] lg:h-[64px]'} />
        </Box>
      </Box>

    </>
  );
}

const style = {
  container: {
    backgroundColor: '#b188ee'
  },
  container2: {
    backgroundColor: '#ffe9d7'
  },
  container3: {
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
    backgroundColor: '#222936'
  },
  content3:{
    aspectRatio: '16/9',
    backgroundColor: '#ffe9d7'
  }
};

export default OurOwnsVerticalComponent;
