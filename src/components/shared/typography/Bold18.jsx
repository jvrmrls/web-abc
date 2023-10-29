import Typography from "@mui/material/Typography";

function Bold18({ children, className }) {
  return (
    <Typography
      fontSize="18px"
      lineHeight="28px"
      className={className}
      fontFamily="Intro"
      fontWeight={700}
    >
      {children}
    </Typography>
  );
}

export default Bold18;
