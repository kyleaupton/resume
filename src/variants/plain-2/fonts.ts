import { Font } from '@react-pdf/renderer';

const registerFont = () => {
  Font.register({
    family: 'Open Sans',
    fonts: [
      {
        src: '/fonts/open_sans/static/OpenSans-Regular.ttf',
        fontWeight: 'normal',
      },
      {
        src: '/fonts/open_sans/static/OpenSans-Thin.ttf',
        fontWeight: 'thin',
      },
      {
        src: '/fonts/open_sans/static/OpenSans-SemiBold.ttf',
        fontWeight: 'semibold',
      },
      {
        src: '/fonts/open_sans/static/OpenSans-Bold.ttf',
        fontWeight: 'bold',
      },
    ],
  });
};

export default registerFont;
