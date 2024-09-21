import { Font } from '@react-pdf/renderer';

const registerFont = () => {
  Font.register({
    family: 'Open Sans',
    fonts: [
      {
        src: 'src/fonts/open_sans/static/OpenSans-Regular.ttf',
        fontWeight: 'normal',
      },
      {
        src: 'src/fonts/open_sans/static/OpenSans-Light.ttf',
        fontWeight: 'thin',
      },
      {
        src: 'src/fonts/open_sans/static/OpenSans-SemiBold.ttf',
        fontWeight: 'semibold',
      },
      {
        src: 'src/fonts/open_sans/static/OpenSans-Bold.ttf',
        fontWeight: 'bold',
      },
    ],
  });
};

export default registerFont;
