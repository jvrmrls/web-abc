import { Box } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Box
      sx={style.container}
      className='w-full flex justify-center items-center py-16 lg:py-24 h-auto '
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
            Pagos: Todo servicio deberá pagarse antes de iniciar, salvo acuerdo
            escrito. Los pagos se realizarán conforme a las condiciones de la
            cotización.
          </li>
          <li>
            Vigencia: Los servicios pagados tendrán una vigencia de 90 días
            calendario. Si no se ejecutan por causas atribuibles al cliente,
            requerirán una nueva contratación, sin devolución ni acreditación de
            pagos anteriores, conforme a la legislación aplicable.
          </li>
          <li>
            Servicios no acumulables: Los entregables mensuales no utilizados
            por causas atribuibles al cliente no podrán trasladarse a períodos
            posteriores.
          </li>
          <li>
            Alcance contratado: Todo servicio o entregable no incluido
            expresamente en la cotización tendrá un costo adicional, previamente
            aprobado.
          </li>
          <li>
            Cambio de servicio: Una vez aprobada la cotización y realizado el
            pago parcial o total, cualquier sustitución del servicio contratado
            requerirá una nueva cotización. Los pagos anteriores no serán
            transferibles automáticamente.
          </li>
          <li>
            Modificaciones: Los cambios de fecha o modificaciones posteriores a
            la aprobación, no incluidos en el alcance contratado, tendrán un
            cargo de $25 por solicitud.
          </li>
          <li>
            Reservaciones: Las sesiones fotográficas y producciones
            audiovisuales requieren reserva anticipada y están sujetas a
            disponibilidad.
          </li>
          <li>
            Información del cliente: El cliente deberá proporcionar
            oportunamente la información, materiales, accesos y lineamientos
            necesarios para ejecutar el servicio.
          </li>
          <li>
            Retrasos: Las demoras atribuibles al cliente podrán modificar los
            plazos de entrega y generar costos adicionales previamente
            informados.
          </li>
          <li>
            Diseño gráfico: Se aprobará previamente la línea gráfica del
            proyecto. No se enviarán artes individuales para aprobación, salvo
            acuerdo escrito.
          </li>
          <li>
            Resultados: La falta de objetivos, información o lineamientos claros
            por parte del cliente podrá afectar los resultados del servicio.
          </li>
          <li>
            Respeto mutuo: Las amenazas, insultos o faltas graves de respeto
            podrán ocasionar la terminación inmediata de la relación comercial,
            conforme a las obligaciones legales aplicables.
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
