import { Box } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Box
      sx={style.container}
      className='w-full flex justify-center items-center py-16 lg:py-24 h-[400px] lg:h-[700px] '
    >
      <Box
        className={
          ' flex flex-col font-normal  mx-auto w-[80%] lg:w-[70%] gap-4 lg:gap-8 rounded-lg p-4 lg:p-8 bg-[#222936] text-[#ffe9d7] shadow-lg shadow-black/50'
        }
      >
        <p className=' font-black text-md mb-2 lg:text-2xl '>
          Términos y condiciones
        </p>
        <ul className='list-disc pl-5 space-y-0 lg:space-y-2 text-xs lg:text-lg'>
          <li>
            Todo servicio debe ser cancelado antes de iniciar, salvo acuerdo
            previo.
          </li>
          <li>Los servicios contratados no son acumulables mensualmente.</li>
          <li>
            Todo contenido requiere aprobación previa antes de publicarse.
          </li>
          <li>
            Retrasos por falta de información, aprobación, coordinación o pagos
            por parte del cliente pueden afectar los tiempos de entrega y
            generar cargos adicionales.
          </li>
          <li>
            Cambios de fecha o modificaciones posteriores a la aprobación
            tendrán un cargo adicional de $25.
          </li>
          <li>
            No enviamos artes individuales; previamente se aprueba la línea
            gráfica del proyecto.
          </li>
          <li>
            Los resultados del servicio pueden verse afectados cuando el cliente
            no proporciona objetivos, lineamientos o referencias claras para el
            desarrollo del proyecto.
          </li>
        </ul>
      </Box>
    </Box>
  );
};

const style = {
  container: {
    // backgroundColor: '#222936',
    // color: '#ffe9d7',

    backgroundColor: '#ffe9d7'
  },
  divider: {
    width: '30%',
    minWidth: '150px',
    maxWidth: '300px',
    height: '2px',
    opacity: 0.5,
    backgroundColor: 'white'
  }
};

export default TermsAndConditions;
