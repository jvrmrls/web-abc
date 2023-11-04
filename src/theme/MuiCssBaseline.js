import FiraSansThin from '/fonts/FiraSans-Thin.otf';
// import FiraSansUltraLight from '/fonts/FiraSans-UltraLight.otf';
// import FiraSansExtraLight from '/fonts/FiraSans-ExtraLight.otf';
import FiraSansLight from '/fonts/FiraSans-Light.otf';
import FiraSansRegular from '/fonts/FiraSans-Regular.otf';
import FiraSansMedium from '/fonts/FiraSans-Medium.otf';
import FiraSansSemibold from '/fonts/FiraSans-SemiBold.otf';
import FiraSansBold from '/fonts/FiraSans-Bold.otf';
import FiraSansExtraBold from '/fonts/FiraSans-ExtraBold.otf';
import FiraSansUltra from '/fonts/FiraSans-Ultra.otf';

const MuiCssBaseline = {
  styleOverrides: {
    fallbacks: [
      // Fira Sans
      {
        '@font-face': {
          fontFamily: 'Fira Sans',
          src: `url(${FiraSansThin}) format("opentype")`,
          fontWeight: 200,
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontStretch: 'normal'
        }
      },
      {
        '@font-face': {
          fontFamily: 'Fira Sans',
          src: `url(${FiraSansLight}) format("opentype")`,
          fontWeight: 300,
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontStretch: 'normal'
        }
      },

      {
        '@font-face': {
          fontFamily: 'Fira Sans',
          src: `url(${FiraSansRegular}) format("opentype")`,
          fontWeight: 400,
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontStretch: 'normal'
        }
      },
      {
        '@font-face': {
          fontFamily: 'Fira Sans',
          src: `url(${FiraSansMedium}) format("opentype")`,
          fontWeight: 500,
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontStretch: 'normal'
        }
      },
      {
        '@font-face': {
          fontFamily: 'Fira Sans',
          fontWeight: 600,
          fontStyle: 'normal',
          fontStretch: 'normal',
          fontDisplay: 'swap',
          src: `url(${FiraSansSemibold}) format("opentype")`
        }
      },
      {
        '@font-face': {
          fontFamily: 'Fira Sans',
          src: `url(${FiraSansBold}) format("opentype")`,
          fontWeight: 700,
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontStretch: 'normal'
        }
      },
      {
        '@font-face': {
          fontFamily: 'Fira Sans',
          src: `url(${FiraSansExtraBold}) format("opentype")`,
          fontWeight: 800,
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontStretch: 'normal'
        }
      },
      {
        '@font-face': {
          fontFamily: 'Fira Sans',
          src: `url(${FiraSansUltra}) format("opentype")`,
          fontWeight: 900,
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontStretch: 'normal'
        }
      }
    ]
  }
};

export default MuiCssBaseline;
