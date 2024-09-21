import { Font } from '@react-pdf/renderer';

const registerFont = () => {
  Font.register({
    family: 'Poppins',
    fonts: [
      {
        src: 'src/variants/plain-1/poppins/Poppins-Regular.ttf',
        fontWeight: 'normal',
      },
      {
        src: 'src/variants/plain-1/poppins/Poppins-Thin.ttf',
        fontWeight: 'thin',
      },
      {
        src: 'src/variants/plain-1/poppins/Poppins-SemiBold.ttf',
        fontWeight: 'semibold',
      },
      {
        src: 'src/variants/plain-1/poppins/Poppins-Bold.ttf',
        fontWeight: 'bold',
      },
    ],
  });
};

export default registerFont;
