import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const ContactComponent = () => {
  const [form, setForm] = useState({
    nombre: '',
    negocio: '',
    departamento: '',
    telefono: '',
    cuentanos: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { nombre, telefono, negocio, departamento, cuentanos } = form;
    if (!nombre || !telefono) return alert('Nombre y teléfono son requeridos');

    const msg = encodeURIComponent(
      `Hola ABC! 👋\nNombre: ${nombre}\nNegocio: ${negocio}\nDepartamento: ${departamento}\nTeléfono: ${telefono}\nCuéntanos: ${cuentanos}`
    );
    window.open(`https://wa.me/50376078726?text=${msg}`, '_blank');
  };

  const fields = [
    { label: 'Nombre', name: 'nombre', multiline: false, autoComplete: 'name' },
    {
      label: 'Negocio',
      name: 'negocio',
      multiline: false,
      autoComplete: 'organization'
    },
    {
      label: 'Departamento',
      name: 'departamento',
      multiline: false,
      autoComplete: 'department'
    },
    {
      label: 'Teléfono',
      name: 'telefono',
      multiline: false,
      autoComplete: 'tel'
    },
    { label: 'Cuéntanos', name: 'cuentanos', multiline: true }
  ];

  return (
    <Box
      sx={style.container}
      className='w-full flex flex-col justify-center items-center py-16 lg:py-24 h-[500px] lg:h-[700px]'
    >
      <h4 className='text-xl font-regular lg:text-6xl leading-4 z-20   '>
        ¿Necesitas una <span className=' font-black'>cotizaci&oacute;n?</span>
      </h4>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          p: 3
        }}
        className='max-w-[400px] lg:max-w-[600px] '
      >
        {fields.map(({ label, name, multiline, autoComplete }) => (
          <Box
            key={name}
            sx={{
              display: 'flex',
              alignItems: multiline ? 'flex-start' : 'center',
              gap: 2
            }}
          >
            <p className='text-sm lg:text-xl color-[#ffe9d7] shrink-0 pt-0 w-[100px] lg:w-[200px]'>
              {label}:
            </p>
            <TextField
              name={name}
              value={form[name]}
              onChange={handleChange}
              multiline={multiline}
              rows={multiline ? 3 : 1}
              size='small'
              autoComplete={autoComplete}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: '#ffe9d7',
                  borderRadius: 1,
                  '& fieldset': { border: 'none' }
                },
                '& .MuiInputBase-input': {
                  fontSize: { xs: 14, lg: 18 },
                  py: 0
                }
              }}
            />
          </Box>
        ))}

        <Button
          onClick={handleSubmit}
          variant='contained'
          sx={{
            mt: { xs: 1, lg: 3 },
            alignSelf: 'center',
            bgcolor: '#F4456A',
            borderRadius: '8px',
            px: 2,
            py: 0,
            color: '#ffe9d7',
            fontWeight: 800,
            fontSize: { xs: 24, lg: 32 },
            textTransform: 'none',
            '&:hover': { bgcolor: '#d93058' }
          }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

const style = {
  container: {
    backgroundColor: '#222936',
    color: '#ffe9d7'

    // backgroundColor: '#ffe9d7'
  }
};
export default ContactComponent;
