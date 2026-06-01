import { Box } from '@mui/material';

function AttachedWord({
  children,
  bgcolor = '#ffbe37',
  color = null,
  component = 'span',
  ...props
}) {
  return (
    <Box
      className=''
      style={{
        backgroundColor: bgcolor,
        color: color || 'auto'
      }}
      component={component}
      {...props}
    >
      {children}
    </Box>
  );
}

export default AttachedWord;
