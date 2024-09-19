import { Font } from '@react-pdf/renderer';

const registerFont = () => {
  Font.register({
    family: 'Poppins',
    fonts: [
      {
        src: '/fonts/poppins/Poppins-Regular.ttf',
        fontWeight: 'normal',
      },
      {
        src: '/fonts/poppins/Poppins-Thin.ttf',
        fontWeight: 'thin',
      },
      {
        src: '/fonts/poppins/Poppins-SemiBold.ttf',
        fontWeight: 'semibold',
      },
      {
        src: '/fonts/poppins/Poppins-Bold.ttf',
        fontWeight: 'bold',
      },
    ],
  });
};

export default registerFont;
